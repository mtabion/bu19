import React, { Component } from "react";
import jwt_decode from "jwt-decode";
//import { decode } from "jsonwebtoken";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    if (token !== undefined) {
      console.log(token);
      const decoded = jwt_decode(token);
      console.log(decoded);
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tr>
              <td>First Name</td>
              <td>{this.state.first_name}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{this.state.last_name}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{this.state.email}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
