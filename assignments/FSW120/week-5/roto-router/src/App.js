import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

import Home from "./components/home.js";
import Services from "./components/services.js";
import About from "./components/about.js";
import Footer from "./components/footer.js";

import "./App.css";

class App extends Component {
  state = {};
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
              <li className="navList-items">
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
