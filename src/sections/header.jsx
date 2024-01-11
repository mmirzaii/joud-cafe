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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam voluptate expedita consectetur, suscipit natus at
                  aperiam aliquam, adipisci culpa ea asperiores id ab earum
                  eligendi architecto exercitationem nihil blanditiis fugiat!
                  Expedita eum natus mollitia praesentium doloribus rem,
                  officiis eos aperiam suscipit hic nemo repellendus provident
                  molestias illo rerum animi iure laudantium a. Impedit dolore
                  nihil error mollitia consequatur recusandae, amet animi
                  voluptatum temporibus architecto distinctio possimus fugiat
                  soluta ex, perspiciatis, eaque deleniti dolores corrupti
                  nostrum? Quam quasi dignissimos numquam ad hic totam quo
                  labore, suscipit sit eveniet quibusdam laudantium laboriosam
                  vero minima commodi sint ea culpa, excepturi amet. Quae,
                  laboriosam.
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
