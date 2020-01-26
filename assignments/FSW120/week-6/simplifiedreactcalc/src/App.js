import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./components/home.js";
import About from "./components/about.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="nav">
            <ul className="nav-lists">
              <li className="navList-items">
                <Link to="/">Home</Link>
              </li>
              <li className="navList-items">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
