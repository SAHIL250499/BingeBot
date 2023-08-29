import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();

  return (
    <div>
      <Header />
      {/**
       * maincontainer
       *  - VideoBackground
       *  - VideoTitle
       * SecondaryContainer
       *  - Movielist * n
       *  - cards * n
       */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
