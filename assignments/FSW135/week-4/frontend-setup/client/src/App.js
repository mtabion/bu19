import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth.js";
import Profile from "./components/profile.js";
import Issues from "./components/issues.js";
import Comments from "./components/comments.js";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Auth />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/issues" render={() => <Issues />} />
          <Route path="/comments" render={() => <Comments />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
