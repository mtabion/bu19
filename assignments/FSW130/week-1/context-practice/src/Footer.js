import React, { Component } from "react";
import UserContext from "./userContext";

function Footer(props) {
  return (
    <UserContext.Consumer>
      {theme => (
        <header className={`${theme}-theme`}>
          <h2>Footer {theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </UserContext.Consumer>
  );
}

export default Footer;
