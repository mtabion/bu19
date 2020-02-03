import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

import "./tweet.css";

function NewTweet(props) {
  const [newTweet, setNewTweet] = useState("");
  const [tweetPosted, setTweetPosted] = useState(false);

  function postNewTweet() {
    props.postTweetCallback(newTweet);
    setTweetPosted(true);
  }

  function tweetUpdated(event) {
    setNewTweet(event.target.value);
  }
  function getFullView() {
    return (
      <div className="tweet-fullview-wrapper">
        <div className="column1-wrapper">
          <div className="image-wrapper">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
          </div>
          <div className="name-wrapper">Rick Sanchez</div>
        </div>
        <div className="column2-wrapper">
          <div className="tweet-content-wrapper">
            <textarea onChange={tweetUpdated} value={newTweet}></textarea>
          </div>
          <div className="bottom-controls-wrapper">
            <div className="control-wrapper">
              <button onClick={postNewTweet}>Post Tweet</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return tweetPosted ? <Redirect to="/" /> : getFullView();
}

export default NewTweet;
