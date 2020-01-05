import React, { Component } from "react";
import "./App.css";
import Square from "./square.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["white", "white", "white", "white"]
    };
  }
  smallTime = () => {
    if (this.state.colors[0] === "white") {
      this.setState({ colors: ["black", "black", "black", "black"] });
    } else {
      this.setState({ colors: ["white", "white", "white", "white"] });
    }
  };

  party = () => {
    this.setState({
      colors: ["purple", "purple", this.state.colors[2], this.state.colors[3]]
    });
  };

  professionalDj1 = () => {
    this.setState({
      colors: [
        this.state.colors[0],
        this.state.colors[1],
        "blue",
        this.state.colors[3]
      ]
    });
  };

  professionalDj2 = () => {
    this.setState({
      colors: [
        this.state.colors[0],
        this.state.colors[1],
        this.state.colors[2],
        "blue"
      ]
    });
  };

  bigTimeDj1 = () => {
    this.setState({
      colors: [
        "aqua",
        this,
        this.state.colors[1],
        this.state.colors[2],
        this.state.colors[3]
      ]
    });
  };

  bigTimeDj2 = () => {
    this.setState({
      colors: [
        this.state.colors[0],
        "lime",
        this.state.colors[2],
        this.state.colors[3]
      ]
    });
  };

  bigTimeDj3 = () => {
    this.setState({
      colors: [
        this.state.colors[0],
        this.state.colors[1],
        "yellow",
        this.state.colors[3]
      ]
    });
  };

  bigTimeDj4 = () => {
    this.setState({
      colors: [
        this.state.colors[0],
        this.state.colors[1],
        this.state.colors[2],
        "silver"
      ]
    });
  };

  render() {
    return (
      <div>
        <div className="button-wrapper">
          <button onClick={this.smallTime} onmouseenter="playAudio()">
            SmallTime Dj
          </button>
          <button onClick={this.party}>Party Dj</button>
          <button onClick={this.professionalDj1}>ProfessionalDj1</button>
          <button onClick={this.professionalDj2}>ProfessionalDj2</button>
          <button onClick={this.bigTimeDj1}>Big Time Dj1</button>
          <button onClick={this.bigTimeDj2}>Big Time Dj2</button>
          <button onClick={this.bigTimeDj3}>Big Time Dj3</button>
          <button onClick={this.bigTimeDj4}>Big Time Dj4</button>
        </div>
        <div className="box-wrapper">
          <Square color={this.state.colors[0]} />
          <Square color={this.state.colors[1]} />
          <Square color={this.state.colors[2]} />
          <Square color={this.state.colors[3]} />
        </div>
      </div>
    );
  }
}

export default App;
