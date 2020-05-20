var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var app = express();
var mysql = require("mysql");
var port = process.env.port || 9000;

// support parsing of application/json type post data
app.use(bodyparser.json());
app.use(cors());
//support parsing of application/x-www-form-urlencoded post data "postman"
app.use(bodyparser.urlencoded({ extended: false }));

var Users = require("./routes/Users");

app.use("/users", Users);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
