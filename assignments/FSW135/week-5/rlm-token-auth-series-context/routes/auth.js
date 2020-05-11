const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

router.get("/signup", (req, res, next) => {
  res.send("Welcome to the auth router");
});

router.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }

    if (user) {
      res.status(403);
      return next(new Error("That username already exists"));
    }

    let newUser = new User();
    newUser.username = req.body.username;
    newUser.password = req.body.password;

    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
      return res.status(201).send({ token, user: savedUser.withoutPassword() });
    });
  });
});

router.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }

    if (!user) {
      res.status(403);
      return next(new Error("Username or password are incorrect"));
    }

    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      if (!isMatch) {
        res.status(403);
        return next(new Error("Username or password are incorrect"));
      }

      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      res.status(200).json({ token: token, user: user.withoutPassword() });
    });
  });
});

module.exports = router;
