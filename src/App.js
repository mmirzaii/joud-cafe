import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Order from "./page/order";
import Menu from "./page/menu";
import NotFound from "./page/not-found";
import Loading from "./page/loading";
class App extends Component {
  state = {
    isLoading: true,
  };
  constructor() {
    super();
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    });
  }
  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="not-found" />} />
            <Route path="/" element={<Order />} />
            <Route path="/order" element={<Navigate replace to="/" />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        )}
      </>
    );
  }
}

export default App;
