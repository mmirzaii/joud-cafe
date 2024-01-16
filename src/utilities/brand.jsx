import React, { Component } from "react";
import "./utilities-style/brand.css";
class Brand extends Component {
  state = {};
  render() {
    return (
      <div className="brand-container d-flex flex-column align-items-center ">
        <h1
          style={{ fontSize: `${15 * this.props.fontSize}%` }}
          className="brand-title"
        >
          JOUD
        </h1>
        <h1
          style={{ fontSize: `${7 * this.props.fontSize}%` }}
          className="brand-text"
        >
          cafe
        </h1>
      </div>
    );
  }
}

export default Brand;
