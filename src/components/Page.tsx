'use client';
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "@/hooks/usePopularMovies";

import useUpcomingMovies from "@/hooks/useUpcomingMovies";
import useHorrorMovies from "@/hooks/useHorrorMovies";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/appStore";
import MovieCardOnHoverDetail from "./MovieCardOnClickDetail";
import Footer from "./Footer";



const Page = () => {
    useNowPlayingMovies();
    usePopularMovies();
   
    useUpcomingMovies();
    useHorrorMovies();
    const showModal =  useSelector((store:RootState) => store.config.showModal);

    return (
        <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        {showModal && <MovieCardOnHoverDetail />}
        <Footer/>
        </div>
    );
} 


export default Page;