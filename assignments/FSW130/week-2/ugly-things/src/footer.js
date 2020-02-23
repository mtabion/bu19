import React, { Component } from "react";
import { ThemeContextConsumer } from "./userContext";

function Header(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <header className="footer-container">
          <h2 className="footer">Footer</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
