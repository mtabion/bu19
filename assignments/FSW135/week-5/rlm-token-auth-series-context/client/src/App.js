import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/UserProvider.js';
import Auth from "./components/auth.js";
import Profile from "./components/profile.js";


import './App.css';

export default function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <div className="App">

      <Switch>
        <Route
          exact path="/" render={ () => token ? <Redirect to="/profile/" /> : <Auth /> } />

        <Route path="/profile" component={Profile} redirectTo="/" token={token} />

      </Switch>
      
    </div>
  );
}
