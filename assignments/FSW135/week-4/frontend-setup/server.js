const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(
  "mongodb://localhost:27017/user-authentication",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log("Connected to the DB");
    }
  }
);

app.use("/comment", require("./routes/commentRouter.js"));
app.use("/api", expressJwt({ secret: process.env.SECRET }));
app.use("/api/user", require("./routes/userRouter.js"));
app.use("/issue", require("./routes/issueRouter.js"));
app.use("/auth", require("./routes/authRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "unauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log("The server is running on  local Port 9000");
});
