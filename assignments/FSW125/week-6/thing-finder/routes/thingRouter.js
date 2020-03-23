const express = require("express");
const thingRouter = express.Router();

const uuid = require("uuid/v4");

const things = [
  {
    name: "banana",
    type: "food",
    price: 2.0,
    _id: 3498374983
  },
  {
    name: "pants",
    type: "clothing",
    price: 25.0,
    _id: 74983
  },
  {
    name: "basket ball",
    type: "toy",
    price: 10.0,
    _id: 34984983
  },
  {
    name: "rockem sockem robots",
    type: "toy",
    price: 15.0,
    _id: 3498445
  },
  {
    name: "shirt",
    type: "clothing",
    price: 8.0,
    _id: 3498445
  },
  {
    name: "soup",
    type: "food",
    price: 3.0,
    _id: 3495645
  },
  {
    name: "flour",
    type: "food",
    price: 1.0,
    _id: 8445
  }
];

thingRouter.get("/:thingType", (req, res) => {
  // Get the parameters
  const type = req.params.thingType;
  // console.log("type", type);
  //Filter things array based on type
  let newArray = things.filter(thing => {
    // console.log("thing.type", thing.type);
    // console.log("type", type);
    // console.log(thing.type == thing.type);
    return thing.type == type;
  });
  console.log("newArray", newArray);
  // Check for other parameters
  const name = req.query.name;
  const price = req.query.price;
  console.log("name", name);
  console.log("price", price);
  // Filter based on additional parametsrs
  // if(name) then further filter based on price
  if (name) {
    newArray = newArray.filter(thing => {
      return thing.name == name;
    });
  }
  if (price) {
    newArray = newArray.filter(thing => {
      return thing.price == price;
    });
  }
  // if (type) {
  //   newArray = newArray.filter(thing => {
  //     return thing.type == type;
  //   });
  // }
  //Return filtered array
  res.send(newArray);
});

// thingRouter.post("/", (req, res) => {
//   const newThing = req.body;
//   newThing._id = uuid();
//   things.push(newThing);
//   res.send(newThing);
// });

// thingRouter.delete("/:thingId", (req, res) => {
//   const thingId = req.params.thingId;
//   const thingIndex = things.findIndex(thing => thing._id == thingId);
//   things.splice(thingIndex, 1);
//   res.send("Successfully deleted a thing");
// });

// thingRouter.put("/:thingId", (req, res) => {
//   const thingId = req.params.thingId;
//   const updateObject = req.body;
//   const thingIndex = things.findIndex(thing => thing._id == thingId);
//   const updatedThing = Object.assign(things[thingIndex], updateObject);
//   res.send(updatedThing);
// });

module.exports = thingRouter;
