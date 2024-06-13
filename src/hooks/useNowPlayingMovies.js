import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS, nowPlayingMovies_API } from "../utils/constants";
import { addNOwPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  //Fetch Data from TMWB API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(nowPlayingMovies_API, API_OPTIONS);
    const json = await data?.json();
    dispatch(addNOwPlayingMovies(json?.results));
    // console.log("movie list fetched");
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
