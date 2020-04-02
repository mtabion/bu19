import React from "react";
//import Thumbnail from "./Thumbnail/Thumbnail.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Education(props) {
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
      <h1>Education and References</h1>
      {props.education.map((item, i) => {
        return (
          <div key={i} className="education-entry">
            <div className="school-name">{item.school}</div>
            <div className="school-start">{item.startDate}</div>
            <div className="school-end">{item.endDate}</div>
            <div className="school-studied">{item.studied}</div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    education: state.education
  };
};

export default connect(mapStateToProps)(Education);
