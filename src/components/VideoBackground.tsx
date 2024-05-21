import { useSelector } from 'react-redux';
import { RootState } from '@/utils/appStore';
import useMovieTrailer from "../hooks/useMovieTrailer";

interface VideoBackgroundProps {
  movieId: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ movieId }) => {
  const trailerVideo = useSelector((store: RootState) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&controls=0`}
        title="YouTube video player"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;