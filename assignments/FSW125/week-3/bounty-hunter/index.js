const express = require("express");
const app = express();
const uuid = require("uuid/v4");

app.use(express.json());

// const bountyHunters = [
//   {
//     FirstName: "Han",
//     LastName: "Solo",
//     Living: true,
//     BountyAmount: 300000,
//     Type: "Human",
//     _id: uuid()
//   },
// {
//   FirstName: "Luke",
//   LastName: "Skywalker",
//   Living: true,
//   BountyAmount: 6000,
//   Type: "Human",
//   _id: uuid()
// },
// {
//   FirstName: "Princess Lea",
//   LastName: "Organa",
//   Living: true,
//   BountyAmount: 10000000,
//   Type: "Princess",
//   _id: uuid()
// }

// app.get("/bountyHunters", (req, res) => {
//   res.send(bountyHunters);
// });

// app.post("/bountyHunters", (req, res) => {
//   const newBountyHunter = req.body;
//   newBountyHunter._id = uuid();
//   bountyHunters.push(newBountyHunter);
//   res.send(`Successfully added ${newBountyHunter.FirstName} to the database!`);
// });

app.use("/bountyHunters", require("./routes/bountyRouter.js"));

app.listen(9000, () => {
  console.log("The server is running on port 9000");
});
