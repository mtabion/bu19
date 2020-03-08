const express = require("express");
const bountyRouter2 = express.Router();
const uuid = require("uuid/v4");

const bountyHunters = [
  {
    FirstName: "Han",
    LastName: "Solo",
    Living: true,
    BountyAmount: 300000,
    Type: "Human",
    _id: uuid()
  },
  {
    FirstName: "Luke",
    LastName: "Skywalker",
    Living: true,
    BountyAmount: 6000,
    Type: "Human",
    _id: uuid()
  },
  {
    FirstName: "Obees",
    LastName: "Ramee",
    Living: true,
    BountyAmount: 1000,
    Type: "Gran",
    _id: uuid()
  },
  {
    FirstName: "Onicrop",
    LastName: "K'Cin",
    Living: true,
    BountyAmount: 1500,
    Type: "Ugnaught",
    _id: uuid()
  },
  {
    FirstName: "Grillo",
    LastName: "Zammon",
    Living: true,
    BountyAmount: 4000,
    Type: "Aqualish",
    _id: uuid()
  }
];

// Get all
bountyRouter2.get("/", (req, res) => {
  res.send(bountyHunters);
});

// get one
bountyRouter2.get("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const foundBounty = bountyHunters.find(bounty => bounty._id === bountyId);
  res.send(foundBounty);
});

// Get by genre
bountyRouter2.get("/search/genre", (req, res) => {
  const genre = req.query.genre;
  const filteredBounties = bounty.filter(bounty => bounty.genre === genre);
  res.send(filteredBounties);
});

// Post one
bountyRouter2.post("/", (req, res) => {
  const newBountyHunter = req.body;
  newBountyHunter._id = uuid();
  bountyHunters.push(newBountyHunter);
  res.send(`Successfully added ${newBountyHunter.FirstName} to the database!`);
});

// Delete one
bountyRouter2.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bountyHunters.findIndex(
    bounty => bounty._id === bountyId
  );
  bountyHunters.splice(bountyIndex, 1);
  res.send("Sucuccessfully deleted bounty");
});

// Update one
bountyRouter2.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const updateObject = req.body;
  console.log(" ");
  console.log(" ");
  console.log("Bounty ID: " + bountyId);
  const bountyIndex = bountyHunters.findIndex(
    bounty => bounty._id === bountyId
  );
  console.log("bountyIndex: " + bountyIndex);
  console.log("updateObject: " + JSON.stringify(updateObject));
  console.log(
    "bountyHunters[bountyIndex]: " + JSON.stringify(bountyHunters[bountyIndex])
  );
  console.log(" ");
  console.log(" ===================================== ");
  const updateBounty = Object.assign(bountyHunters[bountyIndex], updateObject);
  res.send(updateBounty);
});

module.exports = bountyRouter2;
