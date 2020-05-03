import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth.js";
import Profile from "./components/profile.js";
import Issues from "./components/issues.js";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Auth />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/public" render={() => <Issues />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
