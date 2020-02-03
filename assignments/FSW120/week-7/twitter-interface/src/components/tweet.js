import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

import "./tweet.css";

function TweetFullView(props) {
  var placeholderTweet = {
    author: "",
    author_image: "",
    tweet: ""
  };
  const { tweet_id } = useParams();
  const [tweets, setTweets] = useState(props.tweets);
  const [tweet, setTweet] = useState(placeholderTweet);
  const [tweetDeleted, setTweetDeleted] = useState(false);

  if (tweet === placeholderTweet) {
    for (var i = 0; i < props.tweets.length; i++) {
      var aTweet = props.tweets[i];
      if (parseInt(aTweet.tweet_id) === parseInt(tweet_id)) {
        setTweet(aTweet);
      }
    }
  }

  function handleClick() {
    setTweet(placeholderTweet);

    props.deleteCallback(tweet);
    setTweetDeleted(true);
  }

  function getFullView() {
    return (
      <div className="tweet-fullview-wrapper">
        <div className="column1-wrapper">
          <div className="image-wrapper">
            <img src={tweet.author_image} />
          </div>
          <div className="name-wrapper">{tweet.author}</div>
        </div>
        <div className="column2-wrapper">
          <div className="tweet-content-wrapper">{tweet.tweet}</div>
          <div className="bottom-controls-wrapper">
            <div className="control-wrapper">
              <span onClick={handleClick}>DELETE</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return tweetDeleted ? <Redirect to="/" /> : getFullView();
}

export default TweetFullView;
