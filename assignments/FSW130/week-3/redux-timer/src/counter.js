import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class Counter extends Component {
  state = {
    updateTimer: undefined,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  };
  start = () => {
    this.props.dispatch({ type: "START" });

    let myTimer = setInterval(() => {
      this.props.dispatch({ type: "UPDATE_TIME" });
    }, 1);
    this.setState({ updateTimer: myTimer });
  };

  stop = () => {
    this.props.dispatch({ type: "STOP" });
    clearInterval(this.state.updateTimer);
    this.setState({ updateTimer: undefined });
  };

  reset = () => {
    if (this.state.updateTimer === undefined) {
      this.props.dispatch({ type: "RESET" });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{`${this.props.minutes}:${this.props.seconds}:${this.props.milliseconds}`}</h1>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
          <button onClick={this.reset}>reset</button>
          {/* <h1>{this.props.number}</h1>
          <div style={containerStyle}>
            <button type="button" onClick={this.minusOne} style={buttonStyle}>
              -
            </button>
            <button type="button" onClick={this.addOne} style={buttonStyle}>
              +
            </button>
          </div> */}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    startTime: state.startTime,
    minutes: state.minutes,
    seconds: state.seconds,
    milliseconds: state.milliseconds,
    totalMilliseconds: state.totalMilliseconds
  };
};

export default connect(mapStateToProps)(Counter);
