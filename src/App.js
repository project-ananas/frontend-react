import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Components/Nav";
import Feet from "./Components/Feet";
import Home from "./Components/Home";
import History from "./Components/History";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <view style={{ fles: 1 }}>
        <Nav />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/history" component={History} />
              </Switch>
            </div>
          </div>
        </div>
        <Feet />
      </view>
    </Router>
  );
}

export default App;
