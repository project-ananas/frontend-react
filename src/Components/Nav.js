import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div class="navbar-brand">
        <img
          src="pineapple3.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        ></img>
        Ananas
      </div>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/">
            <a className="nav-item nav-link" href="!#">
              Plattegrond
            </a>
          </Link>
          <Link to="/home">
            <a className="nav-item nav-link" href="!#">
              Het Project
            </a>
          </Link>
          <Link to="/history">
            <a className="nav-item nav-link" href="!#">
              Geschiedenis
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
