import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./tweetPreview.css";

function TweetPreview(props) {
  const [tweet, setTweet] = useState(props.tweet);
  return (
    <Link to={`/tweet/${props.tweet.tweet_id}`}>
      <div className="tweet-preview-wrapper">
        <div className="tweet-preview-row1-wrapper">
          <div className="tweet-preview-image">
            <img src={tweet.author_image} />
          </div>
          <div className="tweet-preview-name">
            <span>{tweet.author}</span>
          </div>
        </div>
        <div className="tweet-preview-row2-wrapper">
          <span>{tweet.tweet}</span>
        </div>
      </div>
    </Link>
  );
}

export default TweetPreview;
