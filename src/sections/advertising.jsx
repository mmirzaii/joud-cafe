import React, { Component } from "react";
import "../style/advertising.css";
class Advertising extends Component {
  state = {};
  render() {
    return (
      <section className="container-fluid advertising-container">
        <div className="row h-100 me-5 ms-5">
          <div className="col-7 d-flex flex-column justify-content-center  glass-container">
            <div className="glass">
            <img src="img/up-right.png" className="right" alt="" />
            </div>
            <div className="glass">
            <img src="img/normal-left.png" className="normal" alt="" />
            </div>
            <div className="glass">
            <img src="img/up-right.png" className="left" alt="" />
            </div>
          </div>
          <div className="advertising-text col-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="advertising-title">
              LOOKING <span>FOR</span> A PICK-ME-UP?
            </h2>
            <p className="advertising-caption lh-lg ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dicta magnam facilis sint quis iusto nam deserunt maiores natus,
              odio vitae nobis reiciendis obcaecati corrupti reprehenderit
              distinctio illum tenetur.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Advertising;
