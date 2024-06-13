import { useSelector } from "react-redux";

import useMoveTrailer from "../../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMoveTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // console.log(trailer?.key);

  return (
    <div>
      <iframe
        className="w-screen aspect-video pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&loop=1&mute=1&rel=0&controls=0&showinfo=0&cc_load_policy=0&autohide=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
