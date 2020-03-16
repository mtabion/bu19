let tvshowsDefaultState = [
  {
    title: "SpongeBob SquarePants",
    location: "Los Angeles, California",
    genre: "Animation",
    id: 1
  },
  {
    title: "Walking Dead",
    location: "Senoia, Georgia",
    genre: "Thriller",
    id: 2
  }
];
tvshowsReducer = (state = tvshowsDefaultState, action) => {
  switch (action.type) {
    case "ADD_TVSHOW":
      return [...state, action.payload];
      break;
    case "DELETE_TVSHOW":
      let filteredTVShows = state.filter(tvshowObject => {
        if (tvshowObject.title === action.payload) {
          return false;
        } else {
          return true;
        }
      });
      return filteredTVShows;
      break;
    default:
      return state;
  }
};

module.exports.reducer = tvshowsReducer;
