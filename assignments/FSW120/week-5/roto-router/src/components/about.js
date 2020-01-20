import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-wrapper">
        <h1 className="about-header">WHAT OUR COMPANY IS ABOUT</h1>
        <p className="about-para">
          We’re a family run business with one of the largest service fleets in
          the city, providing round the clock service, seven days a week, to all
          parts of the Las Vegas Valley. Our goal is to have only happy and
          satisfied customers. We strive to provide the highest quality service
          for the fairest possible price. We are fully licensed, bonded, and
          insured, and stand behind all of our work with one of the largest
          service fleets in the city, available 24 hours a day, 7 days a week.
        </p>
      </div>
    );
  }
}

export default About;
