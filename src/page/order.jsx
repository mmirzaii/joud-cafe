import Header from "../sections/header";
import React, { Component , createRef} from "react";
import Slider from "../sections/slider";
import Advertising from "../sections/advertising";
import Footer from "../sections/footer";
import OrderForm from "../sections/order-form";
class Order extends Component {
  formRef= createRef()
  render() {
    return (
      <>
        <Header formRef={this.formRef}/>
        <Slider />
        <Advertising />
        <OrderForm formRef={this.formRef}/>
        <Footer />
      </>
    );
  }
}
export default Order;
