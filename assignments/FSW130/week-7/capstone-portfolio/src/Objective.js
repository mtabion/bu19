import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "./Objective.css";

function Objectives(props) {
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
      <h1>Objectives</h1>
      <div>{props.about.name}</div>
      <div>{props.objectives}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    objectives: state.objectives,
    about: state.about
  };
};

export default connect(mapStateToProps)(Objectives);
