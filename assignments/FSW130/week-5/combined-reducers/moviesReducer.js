let moviesDefaultState = [
  {
    title: "Conclusion",
    genre: "Sci-Fi",
    rated: "PG",
    "release date": "April, 2014"
  }
];
moviesReducer = (state = moviesDefaultState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...state, action.payload];
      break;
    case "DELETE_MOVIE":
      let filteredMovies = state.filter(movieObject => {
        if (movieObject.title === action.payload) {
          return false;
        } else {
          return true;
        }
      });
      return filteredMovies;
      break;
    default:
      return state;
  }
};

module.exports.reducer = moviesReducer;
