// App.jsx

import React from "react";

import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home.js";
import AddNew from "./AddNew.js";
import About from "./About.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav nav-area">
          <ul className="nav-lists navigation-bar">
            <li className="navList-items">
              <Link to="/">Home</Link>
            </li>
            <li className="navList-items">
              <Link to="/add">Add New Contact</Link>
            </li>
            <li className="navList-items">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddNew} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
