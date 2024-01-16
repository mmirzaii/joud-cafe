import React, { Component } from "react";
import "../style/slider.css";
import SlideButton from "../utilities/slider-button";
class Slider extends Component {
  state = {
    slide: [
      {
        id: 1,
        active: false,
        title: "late",
        img: "img/slide1.png",
        animate: "",
      },
      {
        id: 2,
        active: true,
        title: "milk",
        img: "img/slide2.png",
        animate: "",
      },
      {
        id: 3,
        active: false,
        title: "moka",
        img: "img/slide3.png",
        animate: "",
      },
      {
        id: 4,
        active: false,
        title: "tea",
        img: "img/slide4.png",
        animate: "",
      },
    ],
  };
  render() {
    return (
      <section className="container-fluid m-0 p-0  row d-flex slider-container">
        <img src="img/cofee-bean-ltr.png" className="bean-ltr" alt="" />
        <div className="d-flex flex-column justify-content-center align-items-center  item-container">
          <div className=" d-flex slider-title  mt-5 flex-column align-items-center">
            <h1>
              CHOOSE <span>YOUR</span>
            </h1>
            <h2>OWN DRINK</h2>
          </div>
          <div className="slides w-75 d-flex align-items-center justify-content-center mt-5">
            <button
              onClick={this.next}
              className="btn align-self-start angle-btn"
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <div className="drinks d-flex justify-content-between align-items-start  mt-2">
              {this.state.slide.map((s, index) => (
                <SlideButton
                  id={s.id}
                  key={index}
                  title={s.title}
                  active={s.active}
                  img={s.img}
                  animate={s.animate}
                />
              ))}
            </div>
            <button
              onClick={this.previous}
              className="btn align-self-start angle-btn"
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <img src="img/cofee-bean-rtl.png" className="bean-rtl" alt="" />
      </section>
    );
  }
  next = () => {
    const newSlide = this.state.slide.map((s, i, a) => {
      s.active = false;
      if (s.animate === "nextone 1s") {
        s.animate = "nexttwo 1s";
      } else {
        s.animate = "nextone 1s";
      }
      if (s.id === 1) {
        s.id = a.length + 1;
      }
      s.id -= 1;
      if (s.id === 2) {
        s.active = true;
      }
      return s;
    });
    this.setState({ slide: newSlide });
  };
  previous = () => {
    const newSlide = this.state.slide.map((s, i, a) => {
      s.active = false;
      if (s.animate === "previousone 1s") {
        s.animate = "previoustwo 1s";
      } else {
        s.animate = "previousone 1s";
      }
      if (s.id === a.length) {
        s.id = 0;
      }
      s.id += 1;
      if (s.id === 2) {
        s.active = true;
      }
      return s;
    });
    this.setState({ slide: newSlide });
  };
}
export default Slider;
