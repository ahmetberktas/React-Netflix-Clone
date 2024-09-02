import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch } from "react-redux";
import { getPopular } from "../redux/actions/movieActions.js";
import { actionTypes } from "../redux/actionTypes.js";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: actionTypes.SET_MOVIES_LOADING });
    dispatch(getPopular());
  }, []);
  return (
    <div>
      <Hero></Hero>
    </div>
  );
};

export default MainPage;
