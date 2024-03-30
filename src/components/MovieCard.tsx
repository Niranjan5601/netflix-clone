import Image from 'next/image';
import { IMG_CDN_URL } from '../utils/constants';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {setMovieId, toggleModal} from "@/utils/configSlice"

interface MovieCardProps {
    posterPath: string;
    movieId:any;
    
}

const MovieCard: React.FC<MovieCardProps> = ({ posterPath, movieId }) => {
    const dispatch = useDispatch()

    const handleToggleModal = () => {
        dispatch(toggleModal())
        dispatch(setMovieId(movieId))
    }
    if (!posterPath) return null;
   
   

    
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[350px] md:hover:scale-105' onClick={handleToggleModal}>
          <Image
                src={IMG_CDN_URL + posterPath}
                className="rounded-sm object-fill md:rounded"
                layout='fill'
                alt="Movie Card"
            />
        
        </div>
    );
};

export default MovieCard;





