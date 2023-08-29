import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovie();
  usePopularMovies();

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
