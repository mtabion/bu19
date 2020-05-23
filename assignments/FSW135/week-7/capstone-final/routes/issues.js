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

router.put("/upvote/:issueId", (req, res, next) => {
  //Get the user's token

  let token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
    if (err) {
      return res.send(err);
    }

    //Get the user's id
    let userId = decodedToken._id;
    Issue.findById({ _id: req.params.issueId }, (err2, iss) => {
      if (err) {
        return res.send(err);
      }
      console.log(iss);
      //Get the list of upvoters
      let upvoters = iss.upvotes;
      let downvoters = iss.downvotes;
      if (upvoters.includes(userId)) {
        return res.send("Cannot upvote an issue twice");
      }

      if (downvoters.includes(userId)) {
        downvoters.splice(downvoters.indexOf(userId), 1);
      }

      upvoters.push(userId);
      iss.upvotes = upvoters;
      iss.downvotes = downvoters;
      iss.save((err, savedIssue) => {
        res.send("Issue Upvoted");
      });
    });

    //res.send("Good");
  });
});

router.put("/downvote/:issueId", (req, res, next) => {
  //Get the user's token

  let token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
    if (err) {
      return res.send(err);
    }

    //Get the user's id
    let userId = decodedToken._id;
    Issue.findById({ _id: req.params.issueId }, (err2, iss) => {
      if (err) {
        return res.send(err);
      }
      console.log(iss);
      //Get the list of upvoters
      let upvoters = iss.upvotes;
      let downvoters = iss.downvotes;
      if (downvoters.includes(userId)) {
        return res.send("Cannot downvote an issue twice");
      }

      if (upvoters.includes(userId)) {
        upvoters.splice(downvoters.indexOf(userId), 1);
      }

      downvoters.push(userId);
      iss.upvotes = upvoters;
      iss.downvotes = downvoters;
      iss.save((err, savedIssue) => {
        res.send("Issue downvoted");
      });
    });

    //res.send("Good");
  });
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
