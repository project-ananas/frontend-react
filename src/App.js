import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div class="container">
      <div class="row">
        <div id="Box">
          <div class="form-group row">
            <label class="col-sm-3 col-form-label">Username</label>
            <div class="col-sm-9">
              <input class="form-control"></input>
            </div>
          </div>
          <div class="form-group row">
            <label class=" col-sm-3 col-form-label">Password</label>
            <div class="col-sm-9">
              <input class="form-control"></input>
            </div>
          </div>
          <Link to="/src/homePage.js"> Open Ananas </Link>
          <button type="button" class="btn btn-warning btn-block btn-sm">
            Open Ananas
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
