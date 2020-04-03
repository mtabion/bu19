import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "./Experiences.css";

function Experiences(props) {
  return (
    // Render a Thumbnail component
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
      <div className="experiences">
        <h4>{props.about.name}</h4>
        <h4>{props.about.address}</h4>
        <h4>{props.about.phone}</h4>
        <h4>{props.about.email}</h4>
      </div>
      <div className="test"></div>
      <div className="experiences">{props.objectives}</div>
      <img
        src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg"
        alt=""
        style={{ height: "38vw", width: "auto" }}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    objectives: state.objectives,
    about: state.about
  };
};

export default connect(mapStateToProps)(Experiences);
