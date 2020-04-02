const express = require("express");
const app = express();
const morgan = require("morgan");
const uuid = require("uuid/v4");

app.use(express.json());
app.use(morgan("dev"));

app.use("/bountyHunters", require("./routes/bountyRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(8080, () => {
  console.log("The server is running on port 8080");
});
