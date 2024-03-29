


'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { addUpcomingMovies } from "@/utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store: RootState) => store.movies.popularMovies);
  
  const getUpcomingMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?page=1',
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  return upcomingMovies; // Optionally return the `popular` state if needed in the component
};

export default useUpcomingMovies;













