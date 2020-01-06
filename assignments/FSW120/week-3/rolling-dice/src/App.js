import React, { Component } from "react";
import "./App.css";
import DiceBox from "./dice-box.js";

class App extends Component {
  state = {};
  // diceRoll = numberOfDice => {
  //   let rolls = [];
  //   let rollSum = 0;
  //   for (let i = 0; i < numberOfDice; i++) {
  //     rolls[i] = Math.floor(Math.random() * 6) + 1;
  //     // console.log(rolls[i]);

  //     rollSum += rolls[i];
  //   }
  //   this.setState({
  //     numberOfDice,
  //     rolls,
  //     rollSum
  //   });
  // };

  // DiceImage = (roll, index) => {
  //   if (roll === 1) {
  //     return <img key={index} className="dice-image" src={one} alt="1" />;
  //   } else if (roll === 2) {
  //     return <img key={index} className="dice-image" src={two} alt="2" />;
  //   } else if (roll === 3) {
  //     return <img key={index} className="dice-image" src={three} alt="3" />;
  //   } else if (roll === 4) {
  //     return <img key={index} className="dice-image" src={four} alt="4" />;
  //   } else if (roll === 5) {
  //     return <img key={index} className="dice-image" src={five} alt="5" />;
  //   } else if (roll === 6) {
  //     return <img key={index} className="dice-image" src={six} alt="6" />;
  //   }
  // };
  render() {
    return (
      <div className="App">
        <DiceBox />

        <h1>Dice Roll</h1>
      </div>
    );
  }
}
export default App;

// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   state = {
//     numberOfDice: null,
//     rolls: [],
//     rollSum: null
//   };
//   diceRoll = numberOfDice => {
//     let rolls = [];
//     let rollSum = 0;
//     for (let i = 0; i < numberOfDice; i++) {
//       rolls[i] = Math.floor(Math.random() * 6) + 1;
//       rollSum += rolls[i];
//     }
//     this.setState({
//       numberOfDice,
//       rolls,
//       rollSum
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         <div className="buttons">
//           {[1, 2, 3, 4, 5].map(number => {
//             let text = number === 1 ? "dice" : "dice";
//             return (
//               <button
//                 key={number}
//                 onClick={() => this.diceRoll(number)}
//                 className="button"
//               >
//                 {number} {text}
//               </button>
//             );
//           })}
//         </div>
//         <h1>Dice Roll</h1>
//       </div>
//     );
//   }
// }

// export default App;
