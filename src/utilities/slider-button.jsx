import React, { Component } from "react";
import "./utilities-style/slider-button.css";
class SlideButton extends Component {
  render() {
    return (
      <div
        style={{
          order: this.props.id,
          animation: this.props.animate,
        }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <button
          className={`btn slide-btn ${
            this.props.active === true ? "btn-slide-active" : ""
          }`}
          id={this.props.id}
        >
          {this.props.title}
        </button>
        <img src={this.props.img} className=" slide-img" alt="" />
      </div>
    );
  }
}

export default SlideButton;
