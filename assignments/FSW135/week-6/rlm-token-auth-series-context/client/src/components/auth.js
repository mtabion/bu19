import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import AuthForm from "./authForm.js";

const initInputs = { username: "", password: "" };

export default function Auth() {
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);

  const { errMsg, signup, login, resetAuthError } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSignup(e) {
    e.preventDefault();
    signup(inputs);
  }

  function handleLogin(e) {
    e.preventDefault();
    login(inputs);
  }

  function toggleForm() {
    setToggle((prev) => !prev);
    resetAuthError();
  }

  return (
    <div className="auth-container">
      <nav>
        <ul className="nav-container">
          <li>
            <a className="nav-text" href="default.asp">
              Home
            </a>
          </li>
          <li>
            <a className="nav-text" href="news.asp">
              News
            </a>
          </li>
          <li>
            <a className="nav-text" href="contact.asp">
              Contact
            </a>
          </li>
          <li>
            <a className="nav-text" href="about.asp">
              About
            </a>
          </li>
        </ul>
      </nav>
      <h1>Rock The Vote</h1>
      {!toggle ? (
        <div>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
            errMsg={errMsg}
          />
          <p onClick={toggleForm}>Already a member?</p>
          <img src="https://i44.photobucket.com/albums/f44/mtabion/similey%20face%203_zpszplajc8v.jpg" />
        </div>
      ) : (
        <div>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p onClick={toggleForm}>Not a member?</p>
        </div>
      )}
    </div>
  );
}
