import React from "react";
import { connect } from "react-redux";

function About(props) {
  console.log(props);
  return <div>{props.aboutDetails}</div>;
}

const mapStateToProps = state => {
  return {
    aboutDetails: state.about
  };
};

export default connect(mapStateToProps)(About);
