import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import constants from "../constants/constants";

const Hero = () => {
  const { baseImageURL } = constants;

  const state = useSelector((store) => store);
  const random = Math.round(Math.random() * 19);
  const randomMovie = !state.isMoviesLoading && state.populerMovies[random];

  return (
    <div>
      {state.isMoviesLoading || !randomMovie ? (
        <Loading />
      ) : (
        <div
          className="hero-container d-flex"
          style={{
            backgroundImage: `url('${baseImageURL}${randomMovie.backdrop_path}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-card">
            <h1 className="text-color-primary">{randomMovie.title}</h1>
            <p className="text-color-primary">{randomMovie.overview}</p>
            <p className="text-color-primary">
              IMDB: {randomMovie.vote_average.toFixed(1)}
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link className="custom-btn" to={"/detail"}>
                Film Detayları
              </Link>
              <Link className="custom-btn" to={"#"}>
                Listeye Ekle
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
