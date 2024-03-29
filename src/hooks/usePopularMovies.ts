'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { addPopularMovies } from "@/utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store: RootState) => store.movies.popularMovies);
  
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popular && getPopularMovies();
  }, []);

  return popular; // Optionally return the `popular` state if needed in the component
};

export default usePopularMovies;