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
   
   

    //md:h-[200px] md:min-w-[300px]
    return (
        <div className='relative h-[87px] min-w-[152px] cursor-pointer transition duration-200 ease-out md:min-w-[208px] md:h-[117px]   lg:h-[163px] lg:min-w-[290px]  hover:scale-105 overflow-hidden ' onClick={handleToggleModal}>
          <Image
                src={IMG_CDN_URL + posterPath}
                className="rounded-sm object-cover md:rounded-sm"
                fill
                alt="Movie Card"
                quality={100}
                sizes="(max-width: 768px) 50vw,(max-width: 1280px) 100vw, 100vw"
          
                
            />
        
        </div>
    );
};

export default MovieCard;





