import axios from "axios";
import options from "../../constants/constants.js";
import { actionTypes } from "./../actionTypes.js";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getPopular = () => (dispatch) => {
  axios
    .get("/movie/popular", options)
    .then((res) =>
      dispatch({ type: actionTypes.SET_MOVIES, payload: res.data.results })
    )
    .catch(() => dispatch({ type: actionTypes.SET_MOVIES_ERROR }));
};
