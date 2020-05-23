import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider.js";
import { Link } from "react-router-dom";
import "../App.css";

export default function Profile() {
  const {
    user: { username },
    token,
    logout,
    issues,
    getMyIssues,
  } = useContext(UserContext);

  useEffect(() => {
    getMyIssues(token);
  }, []);

  function callLogout() {
    logout();
  }

  return (
    <div className="profile-wrapper">
      <div className="user-wrapper">{username}</div>
      <div className="issues-wrapper">
        {issues.map((issue, i) => {
          return (
            <Link key={i} to={`/issue/${issue._id}`}>
              <div className="issue-wrapper">
                <div>{issue.createdOn}</div>
                <div>{issue.content}</div>
                <div>{issue.upvotes.length}</div>
                <div>{issue.downvotes.length}</div>
                <div>{issue.comments.length}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
