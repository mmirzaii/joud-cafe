import Header from "../sections/header";
import React, { Component } from "react";
import Slider from "../sections/slider";
import Advertising from "../sections/advertising";
import Footer from "../sections/footer";
class Order extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Slider />
        <Advertising />
        <Footer />
      </>
    );
  }
}
export default Order;
