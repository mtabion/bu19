const express = require("express");
const app = express();
const uuid = require("uuid/v4");

app.use(express.json());

app.use("/todos", require("./routes/todolist.js"));

app.listen(9000, () => {
  console.log("The server is running on port 9000");
});
