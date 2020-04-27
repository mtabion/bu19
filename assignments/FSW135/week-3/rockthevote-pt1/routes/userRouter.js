const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");

// Get all endpoint
userRouter.get("/", (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(users);
  });
});

userRouter.post("/", (req, res, next) => {
  const newUser = new User(req.body);
  newUser.save((err, savedUser) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send("savedUser");
  });
});

userRouter.delete("/:userId", (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.userId }, (err) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send("Successfully deleted user");
  });
});

userRouter.put("/:userId", (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, updateUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updateUser);
    }
  );
});

module.exports = userRouter;
