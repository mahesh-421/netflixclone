import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="p-4 md:p-6 ">
      <h1 className="text-xl md:text-3xl py-2 md:py-4">{title}</h1>
      <div className="overflow-x-scroll overflow-y-hidden flex rounded-lg ">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
