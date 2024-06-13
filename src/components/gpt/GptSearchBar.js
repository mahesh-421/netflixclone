import React, { useRef } from "react";

import { BG_URL } from "../../utils/constants";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";

// import openai from "../../utils/openai";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results
    // const gptQuery =
    //   "Act as a Movie Recomendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
  };

  return (
    <div>
      <div className="absolute">
        <img
          className="h-screen object-cover md:w-screen "
          src={BG_URL}
          alt="background"
        />
      </div>
      <div className="flex flex-col items-center ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-[50%] p-6 absolute bg-black bg-opacity-85 my-36 text-white flex items-center rounded-md "
        >
          <input
            className="w-9/12 p-2 my-2  bg-gray-500 bg-opacity-15 border border-gray-800 "
            ref={searchText}
            type="text"
            placeholder={lang[langkey].placeHolder}
          />
          <button
            className="w-3/12 bg-[#e50914]  p-3 my-4 rounded-md  hover:bg-[#cb0e17]"
            onClick={handleGptSearchClick}
          >
            {lang[langkey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
