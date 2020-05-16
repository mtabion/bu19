import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || false,
    issues: [],
  };

  const [userState, setUserState] = useState(initState);

  function getMyIssues(token) {
    console.log(userState);
    axios
      .get(`/issue/${userState.user._id}`, token)
      .then((res) => {
        const { issues } = res.data;

        setUserState((prevUserState) => ({
          ...prevUserState,
          issues: issues,
        }));
      })
      .catch((err) => handleAuthError(err.response.data.errMsg));
  }

  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthError(err.response.data.errMsg));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
        getMyIssues(token);
      })
      .catch((err) => handleAuthError(err.response.data.errMsg));
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: "",
      issues: [],
    });
  }

  function handleAuthError(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: errMsg,
    }));
  }

  function resetAuthError() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: "",
    }));
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        getMyIssues,
        signup,
        login,
        logout,
        resetAuthError,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
