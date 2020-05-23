import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "./context/UserProvider.js";
import Auth from "./components/auth.js";
import Profile from "./components/profile.js";
import ProtectedRoute from "./components/protectedRoute.js";
import Issue from "./components/issue.js";
import NavBar from "./components/nav.js";

import "./App.css";

export default function App() {
  const { token, logout } = useContext(UserContext);
  console.log(token);
  return (
    <div className="App">
      {token ? <NavBar logout={logout} /> : ""}
      <Switch>
        <ProtectedRoute
          path="/profile"
          component={Profile}
          redirectTo="/"
          token={token}
        />

        <ProtectedRoute
          path="/issue/:id"
          component={Issue}
          redirectTo="/"
          token={token}
        />

        <Route
          exact
          path="/"
          render={() =>
            token != false ? <Redirect to="/profile/" /> : <Auth />
          }
        />
      </Switch>
    </div>
  );
}
