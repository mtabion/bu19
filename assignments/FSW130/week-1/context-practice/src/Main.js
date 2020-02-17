import React from "react";
import PropTypes from "prop-types";
//import UserContext from "./userContext";

function Button(props) {
  return (
    <button onClick={props.handleClick} className={`${props.theme}-theme`}>
      Switch Theme
    </button>
  );
}

Button.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"])
};

Button.defaultProps = {
  theme: "light"
};

export default Button;
