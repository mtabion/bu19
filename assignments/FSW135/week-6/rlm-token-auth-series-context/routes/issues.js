const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Issue = require("../models/issue.js");

//Get all issues
router.get("/", function (req, res, next) {
  Issue.find({}, (err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }

    res.json(issues);
  });
});

router.get("/user/:userId", function (req, res, next) {
  Issue.find({ user: req.params.userId }, (err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }

    res.json({ issues: issues });
  });
});

router.get("/:issueId", (req, res, next) => {
  Issue.find({ _id: req.params.issueId }, (err, issue) => {
    if (err) {
      res.status(500);
      return res.send(err);
    }

    res.json(issue);
  });
});

router.post("/", (req, res, next) => {
  let newIssue = new Issue(req.body);

  newIssue.save((err, saveIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }

    res.status(201).send(saveIssue);
  });
});

router.get("/:issueId", (req, res, next) => {
  Issue.findOne({ _id: req.params.issueId }, (err, issue) => {
    if (err) {
      res.status(500);
      return next(err);
    }

    res.status(201).send(issue);
  });
});

router.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      res.status(201).send(updatedIssue);
    }
  );
});

router.get("/comments/:issueId", (req, res, next) => {
  console.log("Triggered");
  Issue.findOne({ _id: req.params.issueId })
    .populate("comments")
    .exec((err, issue) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      res.status(201).send(issue);
    });
  // Issue.findOneAndUpdate({"_id": req.params.issueId}, req.body, {new: true}, (err, updatedIssue) => {

  //     if (err) {
  //         res.status(500);
  //         return next(err);
  //     }

  //     res.status(201).send(updatedIssue);

  // });
});

router.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete({ _id: req.params.issueId }, (err, deletedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }

    res
      .status(200)
      .send(`Successfully deleted issue with id: ${deletedIssue.content}`);
  });
});

module.exports = router;
