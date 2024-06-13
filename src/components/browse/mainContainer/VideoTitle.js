import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-32 md:pt-56 px-12 absolute aspect-video w-screen text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="text-2xl mb-2 md:mb-0 md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white  text-black p-1.5 md:p-4 px-8 md:px-16 text-lg md:text-xl bg-opacity-80 rounded-lg hover:opacity-60">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-800 p-4 px-16 text-xl bg-opacity-80 rounded-lg hover:bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
