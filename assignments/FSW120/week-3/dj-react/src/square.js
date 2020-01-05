import React, { Component } from "react";
import "./square.css";

class Square extends Component {
  state = {};
  render() {
    return (
      <div
        className="square"
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
}

export default Square;
