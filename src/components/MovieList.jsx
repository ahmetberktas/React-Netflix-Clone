import axios from "axios";
import React, { useEffect, useState } from "react";
import constants from "../constants/constants";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        constants.options
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);
  return <div>{genre.name}</div>;
};

export default MovieList;
