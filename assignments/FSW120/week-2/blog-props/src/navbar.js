import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="navbarlink">Home</div>
        <div className="navbarlink">About</div>
        <div className="navbarlink">Contact</div>
      </div>
    );
  }
}

export default Navbar;
