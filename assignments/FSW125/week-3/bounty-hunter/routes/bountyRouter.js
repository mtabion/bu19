const express = require("express");
const bountyRouter = express.Router();
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
    Type: Ugnaught,
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

bountyRouter.get("/", (req, res) => {
  res.send(bountyHunters);
});

bountyRouter.post("/", (req, res) => {
  const newBountyHunter = req.body;
  newBountyHunter._id = uuid();
  bountyHunters.push(newBountyHunter);
  res.send(`Successfully added ${newBountyHunter.FirstName} to the database!`);
});

module.exports = bountyRouter;
