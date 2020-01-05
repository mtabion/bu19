import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    numberOfDice: null,
    rolls: [],
    rollSum: null
  };
  diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum
    });
  };
  render() {
    return (
      <div className="App">
        <div className="buttons">
          {[1, 2, 3, 4, 5].map(number => {
            let text = number === 1 ? "dice" : "dice";
            return (
              <button
                key={number}
                onClick={() => this.diceRoll(number)}
                className="button"
              >
                {number} {text}
              </button>
            );
          })}
        </div>
        <h1>Dice Roll Demo</h1>
      </div>
    );
  }
}

export default App;
