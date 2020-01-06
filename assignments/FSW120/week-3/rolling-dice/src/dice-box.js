import React, { Component } from "react";
import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";
import five from "./assets/five.png";
import six from "./assets/six.png";

class DiceBox extends Component {
  state = { numberOfDice: 0, rolls: [], rollSum: 0 };

  diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      // console.log(rolls[i]);

      rollSum += rolls[i];
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum
    });
  };

  DiceImage = (roll, index) => {
    if (roll === 1) {
      return <img key={index} className="dice-image" src={one} alt="1" />;
    } else if (roll === 2) {
      return <img key={index} className="dice-image" src={two} alt="2" />;
    } else if (roll === 3) {
      return <img key={index} className="dice-image" src={three} alt="3" />;
    } else if (roll === 4) {
      return <img key={index} className="dice-image" src={four} alt="4" />;
    } else if (roll === 5) {
      return <img key={index} className="dice-image" src={five} alt="5" />;
    } else if (roll === 6) {
      return <img key={index} className="dice-image" src={six} alt="6" />;
    }
  };

  render() {
    return (
      <div>
        <div className="buttons">
          {[1, 2, 3, 4, 5].map(number => {
            let text = number === 1 ? "die" : "dice";
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
        {this.state.rolls.map((value, index) => {
          console.log(index);
          return this.DiceImage(value, index);
        })}
      </div>
    );
  }
}

export default DiceBox;
