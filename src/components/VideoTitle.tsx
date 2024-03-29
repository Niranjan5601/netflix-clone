
import { FaPlay } from 'react-icons/fa'
import { HiOutlineInformationCircle } from 'react-icons/hi'

interface VideoTitleProps {
    title: string;
    overview: string;
  }
  
  const VideoTitle: React.FC<VideoTitleProps> = ({ title, overview }) => {
    return (
      <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="flex space-x-3">
        
        <button className="bannerButton bg-white text-black" >
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
        
        >
          <HiOutlineInformationCircle className="h-5 w-5 md:h-8 md:w-8" />More Info 
        </button>
        </div>
      </div>
    );
  };
  
  export default VideoTitle;