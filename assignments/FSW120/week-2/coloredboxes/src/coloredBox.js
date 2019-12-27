import React from "react"; //shortcut key "imrc"

import "./coloredBox.css";

function ColoredBox(props) {
  return (
    <div
      className="colored-box-wrapper"
      style={{ backgroundColor: props.info.bg }}
    >
      <div className="colored-box-title">{props.info.title}</div>
      <div className="colored-box-subtitle">{props.info.subtitle}</div>
      <div className="colored-box-info">{props.info.inform}</div>
    </div>
  );
}

export default ColoredBox;
