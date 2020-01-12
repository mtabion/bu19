import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    names: ["Melvin"],
    currentName: ""
  };

  addNames = () => {
    var tempNamesArray = this.state.names;
    //["Melvin"]
    tempNamesArray.push(this.state.currentName);
    //["Melvin", "Melvin"]

    this.setState({ names: tempNamesArray, currentName: "" });
    console.log("button Pressed");

    //When the button is pressed, add the currentname to the names array

    //Clear out the currentName
  };

  textBoxValue = event => {
    //Every time a button is pressed, save the current value of the textbox
    //to the state property currentName

    this.setState({ names: this.state.names, currentName: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1></h1>
        <input
          id="nameBox"
          type="text"
          onChange={this.textBoxValue}
          value={this.state.currentName}
        ></input>
        <button id="buttonTest" onClick={this.addNames}>
          Add Name
        </button>
        <ul>
          {this.state.names.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
