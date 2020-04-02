import React from "react";
import { Link } from "react-router-dom";
// import "./App.css";

function Thumbnail(props) {
  return (
    <div className="objective">
      <Link to={props.link}>
        <div className="objective-image">
          <img src={props.image} alt="objective Image" />
        </div>
        <div className="objective-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
