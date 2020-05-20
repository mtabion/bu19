import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from ".././context/UserProvider.js";
import axios from "axios";

function Issue(props) {
  const { id } = useParams();
  const [issue, setIssue] = useState({
    content: "-",
    createdOn: "-",
    upvotes: [],
    downvotes: [],
  });

  useEffect(() => {
    axios
      .get(`/issue/${id}`)
      .then((res) => {
        setIssue(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(issue);
  return (
    <div className="issue-wrapper">
      <div className="issue-date">{issue.createdOn}</div>
      <div className="issue-date">{issue.content}</div>
      <div className="issue-date">
        <div className="upvotes">{`Upvotes: ${issue.upvotes.length}`}</div>
        <div className="downvotes">{`Downvotes: ${issue.downvotes.length}`}</div>
      </div>
    </div>
  );
}

export default Issue;
