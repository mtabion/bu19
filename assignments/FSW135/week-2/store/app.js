const express = require("express");
const app = express();
const port = 3000;
const Inventory = require("./models/inventory.js");
const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27018/inventorydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// Create a GET route for retrieving all inverntory from the mongodb using mongoose client

app.get("/", (req, res, next) => {
  console.log("/ Get All");
  Inventory.find((err, inventories) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventories);
  });
});

// app.get("/", function (req, res, next) {
//   Inventory.find((err, Inventory) => {
//     if (err) {
//       res.status(500);
//       return next(err);
//     }
//     return res.status(200).send(Inventory);
//   });
// });

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
// app.listen(3000, () => {
//   console.log("App is listening on port 3000!");
// });
