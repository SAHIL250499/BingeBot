import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      {/**
       * MovieList - Popular
       *   MovieCard * n
       * MovieList - NowPlaying
       * MovieList - Trending
       * MovieList -Horror Movies
       *
       */}
      <div className="mt-0 md:-mt-52 pl-4 md:pl-16 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Action"} movies={movies.actionMovies} />

        <MovieList title={"Top Rated"} movies={movies.horrorMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
