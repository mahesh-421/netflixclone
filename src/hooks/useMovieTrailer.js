import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMoveTrailer = (movieID) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/" +
    //     movieID +
    //     "/videos?language=en-US",
    //   API_OPTIONS
    // );

    const data = await fetch(`/api/netflix//movievideos/${movieID}`);
    console.log(data);
    // const json = await data.json();
    const json = null;
    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    if (!filterData) return;

    const trailer = filterData ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    // console.log("trailer fetched");
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMoveTrailer;
