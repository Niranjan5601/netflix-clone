'use client';

import { AiOutlinePlus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

import { RxCross1 } from "react-icons/rx";
import ReactPlayer from "react-player";
import { BsHandThumbsUp } from "react-icons/bs";
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/utils/appStore";

import { toggleModal, setMovieId } from "@/utils/configSlice"
import { API_OPTIONS } from "@/utils/constants";
import Modal from "@mui/material/Modal";





const MovieCardOnClickDetail = () => {

    const [muted, setMuted] = useState(true)

    const showModal = useSelector((store: RootState) => store.config.showModal);
    const movieId = useSelector((store: RootState) => store.config.movieId);
    const dispatch = useDispatch()

    const [movieData, setMovieData] = useState<any>(null);
    const [trailerData, setTrailerData] = useState<any>(null);

    const handleCloseModal = () => {
        dispatch(toggleModal());
        dispatch(setMovieId(null));
    }


    const getMovieDetail = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            API_OPTIONS
        );
        const json = await data.json();

        setMovieData(json);


    }

    const getTrailerData = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            API_OPTIONS
        );
        const json = await data.json();

        const filterData = json.results.filter((video: { type: string }) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerData(trailer);

    }

    useEffect(() => {
        !movieData && getMovieDetail();
        !trailerData && getTrailerData();
    }, []);



    return (
        <Modal
            open={showModal}
            onClose={handleCloseModal}
            className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
        >
            <>

                <button
                    onClick={handleCloseModal}
                    className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
                >
                    <RxCross1 className="h-6 w-6" />
                </button>

               { trailerData? <><div className="relative pt-[56.25%]">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailerData?.key}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: '0', left: '0' }}
                        playing
                        muted={muted}
                    />
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                        <div className="flex space-x-2">
                            <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                                <FaPlay className="h-7 w-7 text-black" />
                                Play
                            </button>

                            <button className="modalButton" >

                                <AiOutlinePlus className="h-7 w-7" />

                            </button>

                            <button className="modalButton">
                                <BsHandThumbsUp className="h-7 w-7" />
                            </button>
                        </div>
                        <button className="modalButton" onClick={() => setMuted(!muted)}>
                            {muted ? (
                                <HiOutlineVolumeOff className="h-6 w-6" />
                            ) : (
                                <HiOutlineVolumeUp className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div></>:<h1 className="bg-[#181818] text-center pt-3">No data to Display</h1>}

                <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
                    <div className="space-y-6 text-lg">
                        <div className="flex items-center space-x-2 text-sm">
                            <p className="font-semibold text-green-400">
                            {Math.round(movieData?.vote_average * 10)}% Match
                            </p>
                            <p className="font-light">
                                {movieData?.release_date}
                            </p>
                            <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                                HD
                            </div>
                        </div>

                        <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                            <p className="w-5/6">{movieData?.overview}</p>
                            <div className="flex flex-col space-y-3 text-sm">
                                <div>
                                    <span className="text-[gray]">Genres: </span>
                                    {movieData?.genres.map((genre: any) => genre.name).join(', ')}
                                </div>

                                <div>
                                    <span className="text-[gray]">Original language: </span>
                                    {movieData?.original_language}
                                </div>

                                <div>
                                    <span className="text-[gray]">Total votes: </span>
                                    {movieData?.vote_count}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Modal>
    )
}

export default MovieCardOnClickDetail;