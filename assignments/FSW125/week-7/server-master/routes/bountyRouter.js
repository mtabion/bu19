const express = require("express");
const bountyRouter = express.Router();
const uuid = require("uuid/v4");

const bounties = [
  {
    FirstName: "Han",
    LastName: "Solo",
    Living: "True",
    BountyAmount: 300000,
    Type: "Human",
    _id: 3498374983
  },
  {
    FirstName: "Luke",
    LastName: "Skywalker",
    Living: "True",
    BountyAmount: 6000,
    Type: "Human",
    _id: 74983
  },
  {
    FirstName: "Obees",
    LastName: "Ramee",
    Living: "True",
    BountyAmount: 1000,
    Type: "Gran",
    _id: 34984983
  },
  {
    FirstName: "Onicrop",
    LastName: "K'Cin",
    Living: "True",
    BountyAmount: 1500,
    Type: "Ugnaught",
    _id: 12345
  },
  {
    FirstName: "Grillo",
    LastName: "Zammon",
    Living: "True",
    BountyAmount: 4000,
    Type: "Aqualish",
    _id: 56789
  }
];
// get all
bountyRouter.get("/bounties", (req, res, next) => {
  res.status(200);
  res.send(bounties);
});

//get one
bountyRouter.get("/:bountyId", (req, res, next) => {
  const bountyId = req.params.bountyId;
  const foundBounty = bounties.find(bounty => bounty._id == bountyId);
  if (!foundBounty) {
    const error = new Error("The item was not found.");
    res.status(500);
    return next(error);
  }
  res.status(200).send(foundBounty);
});

//get by genre
bountyRouter.get("/search/type", (req, res, next) => {
  const type = req.query.type;
  const filteredBounties = bounties.filter(bounty => bounty.Type === type);
  // console.log("type: ", type);
  if (!type || type == "") {
    const error = new Error("Type is not defined.");
    res.status(500);
    return next(error);
  }
  res.status(200).send(filteredBounties);
});

// post one
bountyRouter.post("/", (req, res, next) => {
  const newBountyHunter = req.body;
  newBountyHunter._id = uuid();
  bounties.push(newBountyHunter);
  if (!newBountyHunter.FirstName || newBountyHunter.FirstName == "") {
    const error = new Error("Missing First Name.");
    res.status(500);
    return next(error);
  }
  res.status(201).send(newBountyHunter);
});

// delete one
bountyRouter.delete("/:bountyId", (req, res, next) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex(bounty => bounty._id == bountyId);
  bounties.splice(bountyIndex, 1);
  if (!bountyIndex || bountyIndex < 0) {
    const error = new Error("Bounty Id does not exist.");
    res.status(500);
    return next(error);
  }
  res.status(200).send(bounties);
});

// update one
bountyRouter.put("/:bountyId", (req, res, next) => {
  const bountyId = req.params.bountyId;
  const updateObject = req.body;
  const bountyIndex = bounties.findIndex(bounty => bounty._id == bountyId);
  const updateBounty = Object.assign(bounties[bountyIndex], updateObject);
  res.status(201).send(updateBounty);
});

module.exports = bountyRouter;
