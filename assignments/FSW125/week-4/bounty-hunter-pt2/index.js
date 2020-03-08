const express = require("express");
const app = express();
const uuid = require("uuid/v4");

app.use(express.json());

app.use("/bountyHunters", require("./routes/bountyRouter2.js"));

app.listen(9000, () => {
  console.log("The server is running on port 9000");
});
