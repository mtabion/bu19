import React from "react";
import UserContext from "./userContext";

function Header(props) {
  return (
    <UserContext.Consumer>
      {theme => (
        <header className={`${props.theme}-theme`}>
          <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </UserContext.Consumer>
  );
}

export default Header;
