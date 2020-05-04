import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/styles.css";
import UserProvider, { UserContext } from "./context/userProvider.js";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
