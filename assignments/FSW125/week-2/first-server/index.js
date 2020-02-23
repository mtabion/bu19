const express = require("express");
const app = express();

app.get("/userdata", (req, res) => {
  res.send([{ name: "Melvin", age: "21", location: "Las Vegas" }]);
});
app.get("/characters", (req, res) => {
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
    },
    {
      name: "Abadango",
      url: "https://rickandmortyapi.com/api/location/2"
    },
    {
      name: "Signus 5 Expanse",
      url: "https://rickandmortyapi.com/api/location/22"
    }
  ];

  res.send(origins);
});

app.listen(9000, () => {
  console.log("The serer is running on port 9000");
});

// control c will stop the process in terminal
