import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Order from "./page/order";
import Menu from "./page/menu";
import NotFound from "./page/not-found";
import OrderForm from "./sections/order-form";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Routes>
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="not-found" />} />
          <Route path="/" element={<Order />} />
          <Route path="/order" element={<Navigate replace to="/" />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </>
    );
  }
}

export default App;
