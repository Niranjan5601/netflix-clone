
import { FaPlay } from 'react-icons/fa'
import { HiOutlineInformationCircle } from 'react-icons/hi'

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle: React.FC<VideoTitleProps> = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl pb-2 md:text-2xl lg:text-4xl xl:text-6xl font-bold">{title}</h1>
      <div>
      <p className="hidden md:hidden lg:inline-block xl:inline-block py-6 lg:text-sm xl:text-lg lg:w-[25%]">{overview}</p>
      </div>
      <div className="flex space-x-3">

        <button className="bannerButton bg-white text-black" >
          <FaPlay className="h-3 w-3 text-black md:h-3 md:w-3 xl:h-7 xl:w-7" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"

        >
          <HiOutlineInformationCircle className="h-3 w-3 md:h-6 md:w-6 lg:h-8 lg:w-8" />More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;