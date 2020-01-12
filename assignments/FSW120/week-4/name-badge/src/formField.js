import React, { Component } from "react";
import "./formField.css";

class FormField extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      about: "",
      submitShouldBeDisabled: true
    };
  }
  checkIfFieldsAreEmpty = () => {
    if (
      this.state.firstName.length === 0 ||
      this.state.lastName.length === 0 ||
      this.state.email.length === 0 ||
      this.state.placeOfBirth.length === 0 ||
      this.state.phone.length === 0 ||
      this.state.favoriteFood.length === 0 ||
      this.state.about.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  firstNameUpdated = event => {
    this.setState({
      firstname: event.target.value,
      submitShouldBeDisabled: this.checkIfFieldsAreEmpty()
    });
  };
  lastNameUpdated = event => {
    this.setState({
      lastname: event.target.value,
      submitShouldBeDisabled: this.checkIfFieldsAreEmpty()
    });
  };
  emailUpdated = event => {
    this.setState({ email: event.target.value });
  };
  placeofbirthUpdated = event => {
    this.setState({ placeOfBirth: event.target.value });
  };
  phoneUpdated = event => {
    this.setState({ phone: event.target.value });
  };
  favoritefoodUpdated = event => {
    this.setState({ favoriteFood: event.target.value });
  };
  aboutUpdated = event => {
    this.setState({ about: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="formfield-wrapper">
        <input type="text" onChange={this.firstNameUpdated} />
        <input type="text" onChange={this.lastNameUpdated} />
        <input type="text" onChange={this.emailUpdated} />
        <input type="text" onChange={this.placeofbirthUpdated} />
        <input type="number" onChange={this.phoneUpdated} />
        <input type="text" onChange={this.favoritefoodUpdated} />
        <textarea onChange={this.aboutUpdated}></textarea>
        {this.state.submitShouldBeDisabled === true ? (
          <button disabled>Submit</button>
        ) : (
          <button>Submit</button>
        )}
      </div>
    );
  }
}

export default FormField;

// import React, {Component} from "react"

// // https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// // https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

// class TodoList extends Component {
//     constructor() {
//         super()
//         this.state = {}
//     }

//     componentDidMount() {
//         // GET the data I need to correctly display
//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.whatever !== this.props.whatever) {
//             // do something important here
//         }
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         // return true if want it to update
//         // return false if not
//     }

//     componentWillUnmount() {
//         // teardown or cleanup your code before your component disappears
//         // (E.g. remove event listeners)
//     }

//     render() {
//         return (
//             <div>
//                 Code goes here
//             </div>
//         )
//     }
// }
// https://scrimba.com/g/greacthooks
// Uncaught Invariant Violation: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

// import React from "react"
// import randomcolor from "randomcolor"

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             color: ""
//         }
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//     }

//     increment() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }
//     decrement() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count - 1
//             }
//         })
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.count !== this.state.count) {
//             const newColor = randomcolor()
//             this.setState({color: newColor})
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1 style={{color: this.state.color}}>{this.state.count}</h1>
//                 <button onClick={this.increment}>
//                     Increment!
//                 </button>
//                 <button onClick={this.decrement}>
//                     Decrement!
//                 </button>
//             </div>
//         )
//     }
// }

// export default App
