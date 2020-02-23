import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { ThemeContextProvider } from "./userContext";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
