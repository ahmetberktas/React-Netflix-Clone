import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const state = useSelector((store) => store);
  const random = Math.round(Math.random() * 19);
  const randomMovie = !state.isMoviesLoading && state.populerMovies[random];
  console.log(randomMovie);
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url('/denemehero.jpg')`,
      }}
    ></div>
  );
};

export default Hero;
