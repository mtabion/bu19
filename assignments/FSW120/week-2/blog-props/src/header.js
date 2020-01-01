import React, { Component } from "react";
import "./header.css";
import Navbar from "./navbar.js";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <div className="title-wrapper">My Blog</div>
      </div>
    );
  }
}

export default Header;
