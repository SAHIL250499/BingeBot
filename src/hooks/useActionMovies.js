import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addActionMovies } from "../utils/moviesSlice";

const useActionMovies = () => {
  const dispatch = useDispatch();

  const actionMovies = useSelector((store) => store.movies.actionMovies);

  const getActionMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=%22Action%22%2C%22Comedy%22",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addActionMovies(json.results));
  };

  useEffect(() => {
    if (!actionMovies) getActionMovies();
  }, []);
};

export default useActionMovies;
