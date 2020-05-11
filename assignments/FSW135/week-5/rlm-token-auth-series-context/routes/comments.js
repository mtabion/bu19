const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Comment = require("../models/comment.js");

//Get all the comments
router.get("/", (req, res, next) => {
    
    Comment.find({}, (err, comments) => {

        if (err) {
            res.status(500);
            return next(err);
        }

        res.status(500).json(comments);
    });

});

router.post("/", (req, res, next) => {

    const newComment = new Comment(req.body);

    newComment.save((err, savedComment) => {

        if (err) {
            res.status(500);
            return next(err);
        }

        res.status(201).send(savedComment);

    });

});

router.get("/:commentId", (req, res, next) => {

    Comment.findOne({"_id": req.params.commentId}, (err, comment) => {

        if (err) {
            res.status(500);
            return next(err);
        }

        res.status(201).send(comment);

    });
})

router.put("/:commentId", (req, res, next) => {

    Comment.findOneAndUpdate({"_id": req.params.commentId}, req.body, {new: true}, (err, updatedComment) => {

        if (err) {
            res.status(500);
            return next(err);
        }

        res.status(201).send(updatedComment);

    }); 

});

router.delete("/:commentId", (req, res, next) => {

    Issue.findOneAndDelete({"_id": req.params.commentId}, (err, deletedComment) => {

        if (err) {
            res.status(500);
            return next(err);
        }

        res.status(200).send(`Successfully deleted issue with id: ${deletedComment.content}`);

    });

})

module.exports = router;