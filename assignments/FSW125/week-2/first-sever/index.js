const express = require("express"); //name of installed pkg in node_modules "express"
const app = express();

// app.js has 2 arguments 1. endpoint (mount path) 2. callback function
app.get("/userdata", (req, res) => {
  // req= request res= response
  res.send([{ name: "Joe", age: "20" }]);
});
app.get("/characters", (req, res) => {
  // req= request res= response
  let characters = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z"
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",

      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z"
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",

      url: "https://rickandmortyapi.com/api/character/3",
      created: "2017-11-04T19:09:56.428Z"
    }
  ];

  res.send(characters);
});
app.get("/origins", (req, res) => {
  let origins = [
    {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1"
    },
    {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20"
    }
  ];
  // req= request res= response
  res.send(origins);
});
// app.put();
// app.post();
// app.delete();

app.listen(9000, () => {
  // app.listen needs two arguments: port and callback
  console.log("The serer is running on port 9000");
});

// control c will stop the process in terminal
// choosing port #s use localhost:3001-9000/

// *Vocabulary* v v v
// Route- An eventListener for http requests

// Endpoint- "/item" "/user"

// Port- localhost:9000/item
