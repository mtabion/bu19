import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "./Education.css";

function Education(props) {
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
      <h1>Education</h1>
      <div className="education">
        <h4>{props.about.name}</h4>
        <h4>{props.about.address}</h4>
        <h4>{props.about.phone}</h4>
        <h4>{props.about.email}</h4>
      </div>
      <div className="test"></div>
      <div className="objectives">{props.objectives}</div>
      <img
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
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

export default connect(mapStateToProps)(Education);
