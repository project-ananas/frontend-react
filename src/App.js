import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Components/Nav";
// import History from "./Components/History";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <view style={{ fles: 1 }}>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Home" component={About} />
                {/* <Route path="/History" component={History} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </view>
    </Router>
  );
}

export default App;
