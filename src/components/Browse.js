import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import usePopularMovies from "../hooks/usePopularMovies";
import useActionMovies from "../hooks/useActionMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import useHorrorMovies from "../hooks/useHorrorMovies";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovie();
  usePopularMovies();
  useActionMovies();
  useHorrorMovies();

  return (
    <div>
      {/**
       * maincontainer
       *  - VideoBackground
       *  - VideoTitle
       * SecondaryContainer
       *  - Movielist * n
       *  - cards * n
       */}
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
