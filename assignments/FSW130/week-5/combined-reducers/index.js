const Redux = require("redux");
let moviesReducerModule = require("./moviesReducer");
let tvshowsReducerModule = require("./tvshowsReducer");

console.log(moviesReducer);

let combinedReducer = Redux.combineReducers({
  movies: moviesReducerModule.reducer,
  tvshows: tvshowsReducerModule.reducer
});

const store = Redux.createStore(combinedReducer);

render = () => {
  console.log("DISPLAYING STATE");
  console.log("Movies");
  console.log(store.getState().movies);
  console.log("TV Shows");
  console.log(store.getState().tvshows);
  console.log(" ");
};

render();

store.subscribe(render);

// dispatchers here
store.dispatch({
  type: "ADD_MOVIE",
  payload: {
    title: "Pan's Labyrinth",
    genre: "Fantasy",
    rated: "R",
    "release date": "January, 2007"
  }
});

store.dispatch({
  type: "ADD_TVSHOW",
  payload: {
    title: "Walking Dead",
    location: "Senoia, Georgia",
    genre: "Thriller"
  }
});

setTimeout(() => {
  store.dispatch({ type: "DELETE_MOVIE", payload: "Conclusion" });
}, 2000);

setTimeout(() => {
  store.dispatch({ type: "DELETE_MOVIE", payload: "Pan's Labyrinth" });
}, 4000);

setTimeout(() => {
  store.dispatch({ type: "DELETE_TVSHOW", payload: "SpongeBob SquarePants" });
}, 6000);

setTimeout(() => {
  store.dispatch({ type: "DELETE_TVSHOW", payload: "Walking Dead" });
}, 8000);
