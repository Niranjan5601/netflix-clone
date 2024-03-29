'use client';
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo  } from "@/utils/movieSlice";
import { RootState } from "@/utils/appStore";
import { useEffect } from "react";


const useMovieTrailer = (movieId:number) => {
  const dispatch = useDispatch();

  const trailer = useSelector((store:RootState) => store.movies.trailerVideo);
  
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video:{type:string}) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;