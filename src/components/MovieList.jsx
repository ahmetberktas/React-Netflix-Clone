import axios from "axios";
import React, { useEffect, useState } from "react";
import constants from "../constants/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        constants.options
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, [genre.id]);

  return (
    <div className="p-4">
      <h2 className="mt-5">{genre.name}</h2>
      <Splide
        options={{
          gap: "10px",
          pagination: false,
          autoWidth: true,
        }}
      >
        {movies ? (
          movies.map((movie) => (
            <SplideSlide key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img
                  className="movie"
                  src={constants.baseImageURL.concat(movie.poster_path)}
                  alt={movie.title}
                />
              </Link>
            </SplideSlide>
          ))
        ) : (
          <Loading></Loading>
        )}
      </Splide>
    </div>
  );
};

export default MovieList;
