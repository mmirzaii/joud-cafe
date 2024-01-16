import React, { Component } from "react";
import "../style/loading.css";
import Brand from "../utilities/brand";
class Loading extends Component {
  state = {};
  render() {
    return (
      <div className="container loading-container d-flex flex-column justify-content-center align-items-center ">
        <div className="loading-title flex-wrap  d-flex justify-content-center align-items-center">
          <h3>welcome to</h3>
          <Brand fontSize="10" />
        </div>
        <img src="img/cafe.svg" className="ld ld-spin" alt="loading" />
      </div>
    );
  }
}

export default Loading;
