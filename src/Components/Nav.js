import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-brand">
        <img width="30" height="30" class="d-inline-block align-top"></img>
        Ananas
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/">
            <a class="nav-item nav-link">Main Page</a>
          </Link>
          <Link to="/history">
            <a class="nav-item nav-link">History Page</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
