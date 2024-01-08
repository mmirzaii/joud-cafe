import { Component } from "react";
import "../style/header.css";
import Navbar from "./navbar";
class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="container-fluid d-flex flex-column ">
          <Navbar />
          <div className="container head-container d-flex align-items-center">
            <div className="row">
              <div className="col-6 d-flex flex-column head-text">
                <h1 className="header-title">JOUD</h1>
                <p className="header-details lh-lg  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  trasfora facere maiores quaerat odit voluptatum. Voluptates
                  dolores quis error harum reprehenderit itaque eveniet
                  voluptaks natus
                  trasfora facere maiores quaerat odit voluptatum. Voluptates
                  dolores quis error harum reprehenderit itaque eveniet
                  voluptaks natus
                  trasfora facere maiores quaerat odit voluptatum. Voluptates
                  dolores quis error harum reprehenderit itaque eveniet
                  voluptaks natus
                </p>
                <button className="btn align-self-start header-btn ">
                  ORDER
                </button>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-center">
                  <img
                    src="img/header-paperglass.png"
                    alt="paper-glass"
                    className="paper-glass"
                  />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
