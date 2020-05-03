const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issue.js");

issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issues);
  });
});

issueRouter.post("/", (req, res, next) => {
  const newIssue = new Issue(req.body);
  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedIssue);
  });
});

issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    req.body,
    { new: true },
    (err, updateIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updateIssue);
    }
  );
});

issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete({ _id: req.params.issueId }, (err) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send("Successfully deleted user");
  });
});

module.exports = issueRouter;
