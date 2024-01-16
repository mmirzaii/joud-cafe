import React, { Component } from "react";
import * as yup from "yup";
import axios from "axios";
import "../style/order-form.css";
class OrderForm extends Component {
  state = {
    customer: {
      name: "",
      order: "",
    },
    errors: [],
    sending: false,
    sended: false,
  };
  schema = yup.object().shape({
    name: yup
      .string("Please enter the correct name")
      .required("The name cannot be empty"),
    order: yup
      .string("Please enter the order correctly")
      .min(3, "Please enter the order correctly"),
  });
  render() {
    const { name, order } = this.state.customer;
    return (
      <>
        <div className="container" ref={this.props.formRef}>
          <div className="row">
            <div className="col-12 col-sm-7 d-flex flex-column justify-content-center form-container">
              <div className="form-title mb-5 d-flex flex-column align-items-center ">
                <h1>
                  OREDER <span>YOUR</span>
                </h1>
                <h2>OWN DRINK</h2>
              </div>
              {this.state.errors.length !== 0 && (
                <div className="alert w-75 alert-danger align-self-center e-alert ">
                  <ul className="list-unstyled ">
                    {this.state.errors.map((e, i) => (
                      <li key={i}>
                        {" "}
                        <i className="fa-solid fa-triangle-exclamation pe-1"></i>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {this.state.sended && (
                <div className="alert w-75 alert-success align-self-center s-alert">
                  <span>Your order has been registered</span>
                </div>
              )}
              <form className="d-flex flex-column align-items-center">
                <div className="input-group w-75 mb-3 ">
                  <span className="input-group-text border-0 bg-body ">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="name"
                    value={name}
                    className="form-control border-0 rounded-0 shadow-none "
                    placeholder="Name"
                  />
                </div>
                <div className="input-group w-75 mb-3">
                  <span className="input-group-text align-items-start bg-body border-0">
                    <i className="fa-solid fa-mug-hot"></i>
                  </span>
                  <textarea
                    onChange={this.handleChange}
                    name="order"
                    value={order}
                    className="form-control border-0 rounded-0 shadow-none "
                    rows="3"
                    placeholder="What would you like to drink?"
                  ></textarea>
                </div>
                <button
                  onClick={this.handleSubmit}
                  className="btn form-btn m-5"
                  disabled={this.state.sending}
                >
                  ORDER
                </button>
              </form>
            </div>
            <div className="col-5 d-none  d-sm-flex justify-content-center align-items-center form-glass-container">
              <img src="img/form-paperglass.png" alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
  handleChange = ({ currentTarget: input }) => {
    const customer = { ...this.state.customer };
    customer[input.name] = input.value;
    this.setState({ customer });
  };
  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.customer, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      this.setState({ errors: error.errors });
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ errors: [] });
    this.setState({ sended:false });
    const result = await this.validate();
    if (result) {
      try {
        this.setState({ sending: true });
        // const response = await axios.post(
        //   "https://reqres.in/api/login",
        //   result
        // );
        this.setState({ sending: false });
        this.setState({ sended: true });
      } catch (error) {
        this.setState({ sending: false });
        this.setState({ errors: ["error 400"] });
      }
    }
  };
}

export default OrderForm;
