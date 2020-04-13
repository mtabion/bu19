const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../models/inventory.js");
const morgan = require("morgan");
const mongoose = require("mongoose");

inventoryRouter.get("/", (req, res, next) => {
  console.log("/ Get All");
  Inventory.find((err, inventories) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventories);
  });
});

module.exports = inventoryRouter;
