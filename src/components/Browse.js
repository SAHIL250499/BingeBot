import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovie();
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
