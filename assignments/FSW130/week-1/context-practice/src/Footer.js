import React from "react";
import UserContext from "./userContext";

function Footer(props) {
  return (
    <UserContext.Consumer>
      {theme => (
        <header className={`${props.theme}-theme`}>
          <h2>Footer {theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </UserContext.Consumer>
  );
}

export default Footer;
