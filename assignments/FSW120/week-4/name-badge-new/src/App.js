import React, { Component } from "react";
import "./App.css";
import FormField from "./components/formField";

function App() {
  return (
    <div className="App">
      {}
      <FormField />
    </div>
  );
}

// function App() {
//   return (
//     <div className="" style={{ backgroundColor: "aqua" }}>
//       {}
//       <FormField />
//     </div>
//   );
// }
// firstNameUpdated = event => {
//   this.setState({
//     firstname: event.target.value
//     // submitShouldBeDisabled: this.checkIfFieldsAreEmpty()
//   });
// };

// const [state, setState] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   placeOfBirth: "",
//   phone: "",
//   favoriteFood: "",
//   about: "",
// lastNameUpdated = event => {
//   this.setState({
//     lastname: event.target.value
//     // submitShouldBeDisabled: this.checkIfFieldsAreEmpty()
//   });
// };
// emailUpdated = event => {
//   this.setState({ email: event.target.value });
// };
// placeofbirthUpdated = event => {
//   this.setState({ placeOfBirth: event.target.value });
// };
// phoneUpdated = event => {
//   this.setState({ phone: event.target.value });
// };
// favoritefoodUpdated = event => {
//   this.setState({ favoriteFood: event.target.value });
// };
// aboutUpdated = event => {
//   this.setState({ about: event.target.value });
// };

// handleChange = event => {
//console.log("change");
//this.setState({ value: event.target.value });
//};

export default App;
