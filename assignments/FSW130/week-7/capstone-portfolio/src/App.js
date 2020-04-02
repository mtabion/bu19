// App.jsx

import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import Objective from "./Objective.js";
import Experiences from "./Experiences.js";
import Education from "./Education.js";
import "./App.css";
import "./Objective.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Objective} />
        <Route path="/Experiences" component={Experiences} />
        <Route path="/Education" component={Education} />

        <div className="navigation">
          {/* <img src={logo} className="logo-image" alt="" /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
