import React, { Component } from "react";
import "./App.css";
class SuperHero extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div onClick={this.props.onClick}>
        <h2>{this.props.h1}</h2>
        <h3>{this.props.h3}</h3>
        <img src={this.props.src} alt="" className="hero_image"></img>
      </div>
    );
  }
}

export default SuperHero;
