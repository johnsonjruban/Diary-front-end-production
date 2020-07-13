import React from "react";

function FilterBlock(props) {
  const onChangeFunc = (optionSelected) => {
    const sel_value = optionSelected.target.value;
                    props.changeByFarmerId(
                      sel_value
                    )
  }
  return (
    <div>
      <div class="filter_wrap">
        <div class="row">
        <div class="col-lg-6 col-sm-4 col-12">
            <span class="move-right">
              <select class="browser-default custom-select custom-select-xl mb-3 selectbox_styles" onChange={onChangeFunc}>
                <option selected>Select FARMER_ID</option>
                <option value="919840836275">+919840836275</option>
                <option value="919010393161">+919010393161</option>
                <option value="919491225371">+919491225371</option>
                <option value="919677094224">+919677094224</option>
              </select>
            </span>
          </div>
          <div class="col-lg-6 col-sm-8 col-12">
            <div class="input-group mb-3"><span class="preadd">+</span>
              <input
                type="text"
                id="search-box"
                class="form-control"
                placeholder="Search By CATTLE_ID"
                aria-label="Search By CATTLE_ID"
                aria-describedby="basic-addon2"
                required="true"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary grey-bg"
                  type="button"
                  onClick={() =>
                    props.searchByName(
                      document.getElementById("search-box").value
                    )
                  }
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBlock;
