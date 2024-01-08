import { Component } from "react";
import "../style/navbar.css";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="container ">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <span className="navbar-brand brand">JOUD</span>
            <button
              className="navbar-toggler border-0  nav-icon"
              data-bs-toggle="collapse"
              data-bs-target="#nav"
            >
            <i className="fa-solid fa-mug-saucer"></i>
            </button>
            <div className="collapse  navbar-collapse" id="nav">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item item">
                  <NavLink className="nav-link link  " to="/menu">
                    Menu
                  </NavLink>
                </li>
                <li className="nav-item item ">
                  <NavLink className="nav-link link " to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item item">
                  <NavLink className="nav-link link " to="/">
                    Order
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
