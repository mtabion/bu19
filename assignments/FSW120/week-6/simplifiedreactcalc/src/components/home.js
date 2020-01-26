import React, { Component, useState } from "react";

function Home() {
  // Declare a new state variable, which we'll call "count"
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");

  let calculate = () => {
    if (operator == "+") {
      let numbers = parseInt(num1) + parseInt(num2);
      let output = document.getElementsByClassName("output")[0];
      output.innerHTML = numbers;
    } else if (operator == "-") {
      let numbers = parseInt(num1) - parseInt(num2);
      let output = document.getElementsByClassName("output")[0];
      output.innerHTML = numbers;
    } else if (operator == "/") {
      let numbers = parseInt(num1) / parseInt(num2);
      let output = document.getElementsByClassName("output")[0];
      output.innerHTML = numbers;
    } else if (operator == "*") {
      let numbers = parseInt(num1) * parseInt(num2);
      let output = document.getElementsByClassName("output")[0];
      output.innerHTML = numbers;
    } else {
      alert("You have not provided a valid operator");
    }
  };

  const myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam == "num1") {
      // console.log("You changed num1");
      setNum1(val);
    }
    if (nam == "operator") {
      // console.log("You changed operator");
      setOperator(val);
    }
    if (nam == "num2") {
      // console.log("You changed num2");
      setNum2(val);
    }
    if (nam == "equal") {
      // console.log("You changed equal");
      // setNum1(val);
    }
    //this.setState({ [nam]: val });
  };

  return (
    <div className="home-wrapper">
      <h2 className="home-header">Simple Calculator</h2>

      <input
        type="number"
        placeholder="0"
        name="num1"
        onChange={myChangeHandler}
      />

      <input
        type="text"
        placeholder="+"
        name="operator"
        onChange={myChangeHandler}
      />

      <input
        type="number"
        placeholder="0"
        name="num2"
        onChange={myChangeHandler}
      />

      <button className="equal" name="equal" onClick={calculate}>
        =
      </button>

      <div className="output"></div>
      <button type="text" className="clearNum">
        CLR
      </button>
    </div>
  );
}

export default Home;
