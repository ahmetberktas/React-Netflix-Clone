import { actionTypes } from "../actionTypes";

const initialState = {
  isMoviesLoading: false,
  isGenresLoading: false,
  isMoviesError: false,
  isGenresError: false,
  populerMovies: [],
  genres: [],
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MOVIES_LOADING:
      return { ...state, isMoviesLoading: true };
    case actionTypes.SET_MOVIES_ERROR:
      return { ...state, isMoviesLoading: false, isMoviesError: true };
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        isMoviesLoading: false,
        isMoviesError: false,
        populerMovies: payload,
      };
    case actionTypes.SET_GENRES:
      return { ...state };
    default:
      return state;
  }
};

export default movieReducer;
