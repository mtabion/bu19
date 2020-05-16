var express = require('express');
var router = express.Router();
const User = require("../models/user.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, (err, users) => {

    if (err) {
      res.status(500);
      return next(err);
    }

    res.json(users);

  });
  
});

module.exports = router;
