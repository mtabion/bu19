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
  // console.log("delete");
  const movieId = req.params.movieId;
  const movieIndex = movies.findIndex(movie => movie._id == movieId);
  movies.splice(movieIndex, 1);
  // console.log("movieIndex", movieIndex);
  // console.log("movies", movies);
  // console.log("delete done");
  res.send("Successfully deleted a movie");
});

movieRouter.put("/:movieId", (req, res) => {
  // console.log("edit");
  const movieId = req.params.movieId;
  const updateObject = req.body;
  // console.log("movieId", movieId);
  // console.log("updateObject", updateObject);
  const movieIndex = movies.findIndex(movie => movie._id == movieId);
  // console.log("movieIndex", movieIndex);
  // console.log("returning movie", movies[movieIndex]);
  const updatedMovie = Object.assign(movies[movieIndex], updateObject);
  // console.log("movies", movies);
  res.send(updatedMovie);
});

module.exports = movieRouter;
