import { Component } from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="container-fluid d-flex flex-column align-items-center">
        <div className="mt-5 icon-container">
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
        <ul className="list-unstyled d-flex link-container">
          <li>
            <Link className="text-decoration-none" to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/menu">
              MENU
            </Link>
          </li>
        </ul>
        <hr />
      </footer>
    );
  }
}

export default Footer;
