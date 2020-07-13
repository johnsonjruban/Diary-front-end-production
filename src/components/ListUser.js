import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { connect } from "react-redux";
import { fetchSuccess, fetchFailure } from "../redux/";
import { Row, Col, Image, Button } from "react-bootstrap";
import "../assets/css/cards.css";
import CharDeatils from "./CharDetails";
import FilterBlock from "./FilterBlock";

function ListUser(props) {
  const [search, setSearch] = useState("");
  const [change, setChange] = useState("");

  useEffect(() => {
    if (search != '' && change != '') {
      API.get(`get_cattle_id_details?former_id=${change}&cattle_id=${search}`)
      .then(response => {
        props.dispatch(fetchSuccess(response));
      })
      .catch(error => {
        props.dispatch(fetchFailure(error));
      });
    } else {
      API.get(`get_former_id_details?former_id=${change}`)
      .then(response => {
        props.dispatch(fetchSuccess(response));
      })
      .catch(error => {
        props.dispatch(fetchFailure(error));
      });
    }
  }, [change, search]);

  const searchByName = str => {
    setSearch(str);
  };

  const changeByFarmerId = str => {
    setChange(str);
  };
  var characterLists = props.data;
  return (
    <div>
      <div>
        <h4>Diary Product Details</h4>
        <FilterBlock searchByName={searchByName} changeByFarmerId={changeByFarmerId} />
        <Row className="row">
          <CharDeatils charlists={characterLists} search_val={search}/>
        </Row>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    loading: state.listuser.loading,
    error: state.listuser.error,
    data: state.listuser.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
