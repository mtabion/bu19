const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/comment.js");

commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comments);
  });
});

commentRouter.post("/", (req, res, next) => {
  const newComment = new Comment(req.body);
  newComment.save((err, savedComment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedComment);
  });
});

commentRouter.put("/:commentId", (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.commentId },
    req.body,
    { new: true },
    (err, updateComment) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updateComment);
    }
  );
});

commentRouter.delete("/:commentId", (req, res, next) => {
  Comment.findOneAndDelete({ _id: req.params.commentId }, (err) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send("Successfully deleted user");
  });
});

module.exports = commentRouter;
