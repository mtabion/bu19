import React, { Component } from "react";
import "./App.js";
import FormField from "./formField.js";
import Badge from "./badge.js";

class App extends Component {
  state = {
    people: []
  };
  render() {
    return (
      <div>
        <FormField />
      </div>
    );
  }
}

export default App;

/*

  Person Object

  {
    firstName: "Ron",
    lastName: "Dear",
    phone: 3337805959,
    info: "Some info about the person",
    placeOfBirth: "steubenville",
    favoriteFood: "pizza"
  }

*/
