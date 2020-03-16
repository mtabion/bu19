const express = require("express");
const movieRouter = express.Router();

const uuid = require("uuid/v4");

const movies = [
  {
    title: "Conclusion",
    genre: "Sci-Fi",
    rated: "PG",
    releaseDate: "April, 2014",
    _id: 3498374983
  },
  {
    title: "Excaliber",
    genre: "Fantasy",
    rated: "PG",
    releaseDate: "April, 1981",
    _id: 74983
  },
  {
    title: "Pan’s Labyrinth",
    genre: "Fantasy",
    rated: "R",
    releaseDate: "January, 2007",
    _id: 34984983
  }
];

movieRouter.get("/", (req, res) => {
  res.send(movies);
});

movieRouter.post("/", (req, res) => {
  const newMovie = req.body;
  newMovie._id = uuid();
  movies.push(newMovie);
  res.send(newMovie);
});

movieRouter.delete("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const movieIndex = movies.findIndex(movie => movie._id == movieId);
  movies.splice(movieIndex, 1);
  res.send("Successfully deleted a movie");
});

movieRouter.put("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const updateObject = req.body;
  const movieIndex = movies.findIndex(movie => movie._id == movieId);
  const updatedMovie = Object.assign(movies[movieIndex], updateObject);
  res.send(updatedMovie);
});

module.exports = movieRouter;
