import React, { Component } from "react";

class Services extends Component {
  state = {};
  render() {
    return (
      <div className="services-wrapper">
        <h1 className="services-header">Roto-Router Services</h1>
        <h3 className="services-subheader">
          Trusted Drain Repair Services In Las Vegas
        </h3>
        <ul className="services-lists">
          <li className="services-listItems">Clogged Kitchen Drains</li>
          <li className="services-listItems">
            Clogged Shower & Bathroom Drains
          </li>
          <li className="services-listItems">
            Clogged Shower & Bathroom Drains
          </li>
          <li className="services-listItems">Drain Cleaning</li>
          <li className="services-listItems">24 Hour Emergency Services</li>
        </ul>
      </div>
    );
  }
}

export default Services;
