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
        <div className='relative h-[120px] min-w-[150px] cursor-pointer transition duration-200 ease-out hover:scale-105 md:h-[200px] md:min-w-[300px] lg:h-[230px] lg:min-w-[350px]  md:hover:scale-101 ' onClick={handleToggleModal}>
          <Image
                src={IMG_CDN_URL + posterPath}
                className="rounded-sm md:rounded-sm"
                fill
                alt="Movie Card"
                
                
                
                
            />
        
        </div>
    );
};

export default MovieCard;





