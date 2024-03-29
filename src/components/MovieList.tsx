import { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface Movie {
    id: number;
    poster_path: string;
}

interface MovieListProps {
    title: string;
    movies: Movie[] | null;
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)
    
    const handleClick = (direction: string) => {
        setIsMoved(true)

        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;

            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    }
    return (
        <div className="px-6 ">
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
            <div className="group relative md:-ml-2">
                <AiOutlineLeft
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'
                        }`}
                    onClick={() => handleClick('left')}
                />

                <div
                    ref={rowRef}
                    className="flex items-center space-x-0.5 overflow-x-scroll no-scrollbar md:space-x-2.5 md:p-2"
                   
                >
                    {movies?.map((movie) => (
                       <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} />
                    ))}
                </div>

                <AiOutlineRight
                    className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    )
};

export default MovieList;







