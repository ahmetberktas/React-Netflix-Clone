import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPopular } from "../redux/actions/movieActions.js";
import { actionTypes } from "../redux/actionTypes.js";
import MovieList from "../components/MovieList.jsx";
import Loading from "../components/Loading.jsx";

const MainPage = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store);

  useEffect(() => {
    dispatch({ type: actionTypes.SET_MOVIES_LOADING });
    dispatch(getPopular());
    dispatch({ type: actionTypes.SET_GENRES_LOADING });
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero></Hero>
      {state.isGenresLoading ? (
        <Loading></Loading>
      ) : state.isGenresError ? (
        <p>Üzgünüz Hata Oluştu</p>
      ) : (
        state.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre}></MovieList>
        ))
      )}
    </div>
  );
};

export default MainPage;
