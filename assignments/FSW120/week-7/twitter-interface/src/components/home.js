import React, { useState } from "react";

import TweetPreview from "./tweetPreviews.js";

import "./home.css";

function Home(props) {
  const [tweets, setTweets] = useState(props.tweets);

  return (
    <div className="home-wrapper">
      <div className="tweets-container">
        {tweets.map((obj, i) => {
          return <TweetPreview key={i} tweet={obj} />;
        })}
      </div>
    </div>
  );
}

export default Home;
