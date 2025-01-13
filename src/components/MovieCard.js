import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import fallbackImage from "../utils/fallback.jpg";

const MovieCard = ({ posterPath }) => {
  // if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={posterPath ? IMG_CDN_URL + posterPath : fallbackImage} />
    </div>
  );
};

export default MovieCard;
