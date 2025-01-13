import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import groq from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { generateText } from 'ai';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const [error,SetError] = useState('');

  const searchText = useRef(null);

  //search movie in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    return json.results;
  };
  
  
  const handleGptSearchClick = async () => {
    try {
      const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query : " ${searchText.current.value}". Only give me names of 5 movies which will be comma separated.`;
      

      const { text } = await generateText({
        model: groq('llama-3.3-70b-versatile'),
        prompt: gptQuery,
      });

      const gptMovies = text.split(",");

      //For each movie search in TMDB API

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      //[Promise,Promise,Promise,Promise]

      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );



    } catch (err) {
      SetError(err.message); // Display error in UI
    }
  };

  

  return (
    <div className="flex flex-col pt-[60%] md:pt-[10%] items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2  bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langkey].search}
        </button>
      </form>
      {error && (<div className="w-full md:w-1/2 text-red-600 font-bold backdrop-blur text-xl">{error}</div>)}
    </div>
  );
};

export default GptSearchBar;
