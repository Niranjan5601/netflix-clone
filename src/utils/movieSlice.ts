import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesState {
  nowPlayingMovies: any;
  trailerVideo: any;
  popularMovies: any;
 
  upcomingMovies:any,
  horrorMovies:any,
}

const initialState: MoviesState = {
  nowPlayingMovies: null,
  trailerVideo: null,
  popularMovies: null,
 
  upcomingMovies:null,
  horrorMovies:null
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<any>) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action: PayloadAction<any>) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action: PayloadAction<any>) => {
      state.popularMovies = action.payload;
    },
   
    addUpcomingMovies: (state, action: PayloadAction<any>) => {
      state.upcomingMovies = action.payload;
    },
    addHorrorMovies: (state, action: PayloadAction<any>) => {
      state.horrorMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addUpcomingMovies,addHorrorMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;