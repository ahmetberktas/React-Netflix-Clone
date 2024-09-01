const initialState = {
  isLoading: true,
  populerMovies: [],
  genres: [],
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LIST_MOVİE":
      return state;
    default:
      return state;
  }
};

export default movieReducer;
