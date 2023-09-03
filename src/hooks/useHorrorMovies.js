import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  const dispatch = useDispatch();
  const horrorMovies = useSelector((store) => store.movies.horrorMovies);

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    if (!horrorMovies) getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
