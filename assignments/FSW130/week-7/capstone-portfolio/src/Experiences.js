import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail.js";
import { Link } from "react-router-dom";
import "./App.css";

function Experiences(props) {
  return (
    <div>
      <div className="navigation-sub">
        <Link to="/" className="item">
          Objective
        </Link>
        <Link to="/experiences" className="item">
          Experiences
        </Link>
        <Link to="/education" className="item">
          Education
        </Link>
      </div>
      <h1>Experiences</h1>
      <Thumbnail
        link="/twitter"
        image="http://twitter-url.jpg"
        title="Resume Objectives"
        category="Mobile App"
      />
      <Thumbnail
        link="/airbnb"
        image="http://airbnb-url.jpg>"
        title="Experiences"
        category="Website"
      />
      <Thumbnail
        link="/airbnb"
        image="http://airbnb-url.jpg>"
        title="Education and References"
        category="Desktop"
      />
    </div>
  );
}

export default Experiences;
