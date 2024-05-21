import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/appStore";

const SecondaryContainer = () => {
    const movies = useSelector((store: RootState) => store.movies);
    return (
        movies && (
            <div className="bg-[#141414]">
                <div className="mt-0 md:-mt-40 lg:-mt-60 md:pl-9 pl-4 lg:pl-12  relative z-20">
                    
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                    <MovieList
                        title={"Upcoming Movies"}
                        movies={movies.upcomingMovies}
                    />
                    <MovieList title={"Horror Movies"} movies={movies.horrorMovies} />
                </div>
            </div>
        )
    );
};

export default SecondaryContainer;