import React, { Component } from "react";
import "../style/not-found.css";
class NotFound extends Component {
  render() {
    return (
      <>
        <div className="not-container">
          <div className="coffee-header">
            <div className="coffee-header__buttons coffee-header__button-one"></div>
            <div className="coffee-header__buttons coffee-header__button-two"></div>
            <div className="coffee-header__display"></div>
            <div className="coffee-header__details"></div>
          </div>
          <div className="coffee-medium">
            <div className="coffe-medium__exit"></div>
            <div className="coffee-medium__arm"></div>
            <div className="coffee-medium__liquid"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
            <div className="coffee-medium__cup"></div>
          </div>
          <div className="coffee-footer"></div>
        </div>
        <h1 className="not-title">404 Not Found</h1>
      </>
    );
  }
}

export default NotFound;
