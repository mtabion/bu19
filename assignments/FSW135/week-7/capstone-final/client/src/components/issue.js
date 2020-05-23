import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from ".././context/UserProvider.js";
import axios from "axios";
import Moment from "react-moment";

function Issue(props) {
  const { id } = useParams();
  const { token } = useContext(UserContext);
  const [issue, setIssue] = useState({
    content: "-",
    createdOn: "-",
    upvotes: [],
    downvotes: [],
  });
  const [update, setUpdate] = useState(false);

  function upvote() {
    let config = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .put(`/issue/upvote/${id}`, {}, config)
      .then((res) => {
        console.log("upvoted");
        setUpdate(true);
      })
      .catch((err) => console.log(err));
  }

  function downvote() {
    let config = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .put(`/issue/downvote/${id}`, {}, config)
      .then((res) => {
        console.log("downvoted");
        setUpdate(true);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(`/issue/${id}`)
      .then((res) => {
        setIssue(res.data[0]);
        setUpdate(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(update);
  return (
    <div className="single-issue-wrapper">
      <div className="si-date-wrapper">
        <Moment>{issue.createdOn}</Moment>
      </div>
      <div className="si-content-wrapper">{issue.content}</div>
      <div className="si-votes-wrapper">
        <div className="upvotes">{`Upvotes: ${issue.upvotes.length}`}</div>
        <div className="downvotes">{`Downvotes: ${issue.downvotes.length}`}</div>
        <button onClick={upvote}>Upvote</button>
        <button onClick={downvote}>Downvote</button>
      </div>
    </div>
  );
}

export default Issue;
