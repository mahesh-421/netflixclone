import React from "react";

import { image_API } from "../../../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div>
      <img
        className="min-w-32 md:min-w-48  pr-4 rounded-md hover:scale-110 "
        src={image_API + poster_path}
        alt="movies"
      />
    </div>
  );
};

export default MovieCard;
