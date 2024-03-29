export const LOGO: string =
  "https://assets.nflxext.com/ffe/siteui/acquisition/home/nflxlogo.png";

export const USER_AVATAR: string = "https://i.imgur.com/YkyLA3e.png";

export const API_OPTIONS: {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
} = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2JkNzJmMDU2Njk2ZWJmNGZjYWRkNWE0NmQzOTg5ZiIsInN1YiI6IjY1ZjQ2ZmE2MWZhMWM4MDE5NjVjOTYyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u06aypV3ABwsky51nQRJuJrRGNdb-PYab23MlXTFdqE",
  },
};

export const IMG_CDN_URL: string = "https://image.tmdb.org/t/p/w500/";

export const BG_URL: string =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const SUPPORTED_LANGUAGES: { identifier: string; name: string }[] = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "tamil", name: "Tamil" },
];

export const OPENAI_KEY: string | undefined = process.env.REACT_APP_OPENAI_KEY;
