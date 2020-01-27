import React, { Component, useState } from "react";

function Subtract(props) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState(props.operator);
  const [result, setResult] = useState(0);

  let calculate = () => {
    let numbers = parseInt(num1) - parseInt(num2);
    setResult(numbers);
  };

  const myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "num1") {
      setNum1(val);
    }
    if (nam === "operator") {
      setOperator(val);
    }
    if (nam === "num2") {
      setNum2(val);
    }
    if (nam === "equal") {
    }
  };

  let resetForm = () => {
    //JUse the react hooks for the three changable parts of this component. Num1, num2 and result
    setNum1(0);
    setNum2(0);
    setResult(0);
  };
  console.log(operator);
  return (
    <div className="home-wrapper">
      <h2 className="home-header">Simple Calculator</h2>

      <div className="input-wrapper">
        <input
          type="number"
          value={num1}
          name="num1"
          onChange={myChangeHandler}
          className="math-input"
        />

        <div className="math-input operator">{operator}</div>

        <input
          type="number"
          value={num2}
          name="num2"
          onChange={myChangeHandler}
          className="math-input"
        />
      </div>

      <button className="equal" name="equal" onClick={calculate}>
        =
      </button>

      <div className="output">{result}</div>
      <button
        type="reset"
        value="reset"
        className="clearNum"
        onClick={resetForm}
      >
        Clear
      </button>
    </div>
  );
}
export default Subtract;
