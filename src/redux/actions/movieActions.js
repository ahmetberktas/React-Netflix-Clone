import axios from "axios";
import constants from "../../constants/constants.js";
import { actionTypes } from "./../actionTypes.js";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getPopular = () => (dispatch) => {
  axios
    .get("/movie/popular", constants.options)
    .then((res) =>
      dispatch({ type: actionTypes.SET_MOVIES, payload: res.data.results })
    )
    .catch(() => dispatch({ type: actionTypes.SET_MOVIES_ERROR }));
};

export const getGenres = () => (dispatch) => {
  axios
    .get("/genre/movie/list", {
      ...constants.options,
      params: {
        language: "en",
      },
    })
    .then((res) =>
      dispatch({ type: actionTypes.SET_GENRES, payload: res.data.genres })
    )
    .catch(() => dispatch({ type: actionTypes.SET_GENRES_ERROR }));
};
