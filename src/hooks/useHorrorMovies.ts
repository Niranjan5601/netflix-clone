'use client';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "@/utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { RootState } from "@/utils/appStore";

const useHorrorMovies = () => {
  const dispatch = useDispatch();
  const horrorMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies);

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.asc&with_genres=27",
      API_OPTIONS
    );
    const json = await data.json();
     
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    !horrorMovies && getHorrorMovies();
  }, []);
};

export default useHorrorMovies;