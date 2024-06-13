import { useSelector } from "react-redux";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import MainContainer from "./browse/mainContainer/MainContainer";
import SecondaryContainer from "./browse/secondaryContainer/SecondaryContainer";

import GptSearch from "./gpt/GptSearch";

import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  const gptSearch = useSelector((store) => store.gpt.showGptsSearch);
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <div className="bg-black">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
