import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import TimeAgo from "react-timeago";

function CharDeatils(props) {
  var chardetails = props.charlists.result;
  let search_val = props.search_val;
  if (typeof chardetails !== "undefined" && chardetails !== "") {
    if (search_val == '') {
    let organization = chardetails.personal_details.organization;
    let username = chardetails.personal_details.username;
    let cattles_count = Object.keys(chardetails.cattles).length
      return (
        <div className="col-lg-4 col-sm-6 col-xl-3 col-6">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Organisation</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {organization}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">User Name</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {username}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Total Cattle</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {cattles_count}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      let chardetails_new = props.charlists.result;
      console.log(chardetails_new);
      let age_in_months = chardetails_new.age_in_months;
      let breed = chardetails_new.breed;
      let cattle_name = chardetails_new.cattle_name;
      let cattle_ID = chardetails_new.cattle_ID;
      let farmer_name = chardetails_new.farmer_name;
      let latitude = chardetails_new.latitude;
      let longitude = chardetails_new.longitude;
      let stage = chardetails_new.stage;
      let timestamp = chardetails_new.timestamp;
      let weight_in_kg = chardetails_new.weight_in_kg;
      let image1 = chardetails_new.image1;
      let image2 = chardetails_new.image2;
      let image3 = chardetails_new.image3;
      return (
        <div className="col-12">
          <div className="col-3" Style="float:left;">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Age In Months</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {age_in_months}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Breed</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {breed}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Farmer Name</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {farmer_name}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Latitude</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {latitude}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Longitude</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {longitude}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Stage</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {stage}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">TimeStamp</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="container_wrap">
                  <div className="row">
                    <div className="col-6">Weight_in_kg</div>
                    <div className="col-6">
                      <span className="pull-right move-right">
                        {weight_in_kg}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          </div>
        <div className="col-9" Style="float:left;">
          <div className="col-3 card" Style="float:left;width: 20%;margin-left: 25px;">
            <Image src={image1} className="card-img-top image" />
            <div className="overlay">
              <span className="text-left overlay-box name-title">
                {}
              </span>
            </div>
          </div>

          <div className="col-3 card" Style="float:left;width: 20%;margin-left: 25px;">
            <Image src={image2} className="card-img-top image" />
            <div className="overlay">
              <span className="text-left overlay-box name-title">
                {}
              </span>
            </div>
          </div>

          <div className="col-3 card" Style="float:left;width: 20%;margin-left: 25px;">
            <Image src={image3} className="card-img-top image" />
            <div className="overlay">
              <span className="text-left overlay-box name-title">
                {}
              </span>
            </div>
          </div>

          </div>
          </div>
      );
    }
  } else {
    return "No Data";
  }
}

export default CharDeatils;
