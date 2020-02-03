import React, { useState } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

import tweetData from "./tweetData.json";
import TweetFullView from "./components/tweet.js";
import NewTweet from "./components/newTweet.js";
import "./App.css";

import Home from "./components/home.js";

function App() {
  const [tweets, setTweets] = useState(tweetData.tweets);

  function tweetWasDeleted(tweetThatWasDeleted) {
    let modifiedTweets = tweets.filter((object, index, arr) => {
      if (object.tweet_id === tweetThatWasDeleted.tweet_id) {
        return false;
      } else {
        return true;
      }
    });

    setTweets(modifiedTweets);
  }

  function postNewTweet(tweet) {
    var newTweet = {
      author: "Rick Sanchez",
      author_id: 1,
      tweet: tweet,
      tweet_id: tweets.length,
      author_image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      date: null
    };
    var newTweets = tweets;
    newTweets.push(newTweet);
    setTweets(newTweets);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav nav-area">
          <ul className="nav-lists navigation-bar">
            <li className="navList-items">
              <Link to="/">Home</Link>
            </li>
            <li className="navList-items">
              <Link to="/new">Post New Tweet</Link>
            </li>
          </ul>
        </nav>
        <div className="main-content-wrapper">
          <Switch>
            <Route exact path="/">
              <Home tweets={tweets} />
            </Route>
            <Route exact path="/tweet/:tweet_id">
              <TweetFullView tweets={tweets} deleteCallback={tweetWasDeleted} />
            </Route>
            <Route exact path="/new">
              <NewTweet postTweetCallback={postNewTweet} />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
