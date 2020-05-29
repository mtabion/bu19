const express = require("express");
const posts = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const Post = require("../models/Post");
posts.use(cors());

process.env.SECRET_KEY = "secret";

posts.get("/test", (req, res) => {
  res.send("test");
});

posts.delete("/:postId", (req, res) => {
  Post.destroy({
    where: { id: req.params.postId },
  }).then((r) => {
    console.log(r);
    res.send("Post deleted");
  });
});

posts.get("/", (req, res) => {
  Post.findAll().then((posts) => {
    console.log(posts);
    //res.send("Getting posts...");
    res.json(posts);
  });
});

posts.post("/new", (req, res) => {
  let token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res.send(err);
    }

    //Get the user's id
    let userId = decodedToken.id;
    const postData = {
      content: req.body.content,
      owner: userId,
    };
    console.log(postData);

    Post.create(postData)
      .then((post) => {
        //console.log(post);
        res.json({ status: "Post created successfully" });
      })
      .catch((err) => {
        res.send("error: " + err);
      });
  });
});

module.exports = posts;
