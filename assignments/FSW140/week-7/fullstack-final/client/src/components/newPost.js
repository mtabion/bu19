import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import "../App.css";

function NewPost(props) {
  const [postText, setPostText] = useState("");

  function postTextUpdated(event) {
    //console.log(postText);
    //console.log(event.target.value);
    setPostText(event.target.value);
  }

  function submitNewPost() {
    //Get token form local storage
    let token = localStorage.getItem("usertoken");
    let config = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .post("/posts/new", { content: postText }, config)
      .then((res) => {
        setPostText("");
        props.history.push(`/posts`);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="new-post-wrapper">
      <div className="page-label-wrapper">Make a New Post</div>
      <div className="post-text-wrapper">
        <textarea onChange={postTextUpdated} value={postText} />
      </div>
      <div className="submit-button-wrapper">
        <button onClick={submitNewPost}>Submit</button>
      </div>
    </div>
  );
}

export default withRouter(NewPost);
