const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../models/inventory.js");
const morgan = require("morgan");
const mongoose = require("mongoose");

//POST
inventoryRouter.post("/", (req, res, next) => {
  console.log(req.body);

  let item = new Inventory();
  item.name = req.body.name;
  item.price = req.body.price;
  item.description = req.body.description;

  item.save((err) => {
    if (err) {
      res.status(500);
      return next(err);
    }

    return res.send("Everything went fine");
  });
});

//UPDATE - Change one PUT request
inventoryRouter.put("/:inventoryId", (req, res, next) => {
  Inventory.updateOne(
    { _id: req.params.inventoryId },
    {
      price: req.body.price,
      name: req.body.name,
      description: req.body.description,
    },
    (err, result) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      return res.send(result);
    }
  );
});

//DELETE
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
  Inventory.deleteOne({ _id: req.params.inventoryId }, (err) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send("Item deleted");
  });
});

//FIND ONE
inventoryRouter.get("/:inventoryId", (req, res, next) => {
  Inventory.find({ _id: req.params.inventoryId }, (err, inventories) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventories);
  });
});

//FIND ALL
inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((err, inventories) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventories);
  });
});

module.exports = inventoryRouter;
