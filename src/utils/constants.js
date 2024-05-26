import image from "../asset/BingeBot__3_-removebg-preview.png"

export const LOGO =image;

export const USER_AVATAR =
  "https://occ-0-2890-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfiHwyKndOXmOMcTw4YjRIfx3vNQuHjc2pUB_MrqcmNJ86bjTdE_2MRi6elbFFx5an6FJbcNglFMIZ_MbgKTIv7YEYoBfrg.png?r=bcc";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
