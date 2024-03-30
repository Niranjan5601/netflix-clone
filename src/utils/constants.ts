export const LOGO: string =
  "https://rb.gy/ulxxee";

export const USER_AVATAR: string = "https://rb.gy/g1pwyx";

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
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL: string = "https://image.tmdb.org/t/p/w500/";





