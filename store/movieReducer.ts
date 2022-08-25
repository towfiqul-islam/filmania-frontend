import { createSlice } from '@reduxjs/toolkit';
import { getFavorites } from '../services/movies/helper';

import { RootState } from './store';

export const movieReducer = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    favorites: [],
    limit: 2,
    skip: 0,
    totalMovies: 0,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFavorites: (state) => {
      const favorites = getFavorites(state.movies);
      state.favorites = favorites;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setSkip: (state, action) => {
      if (action.payload === 1) {
        state.skip = state.movies.length;
      } else {
        state.skip = action.payload;
      }
    },
    setTotalMovies: (state, action) => {
      state.totalMovies = action.payload;
    },
  },
});

export const { setMovies, setFavorites, setLimit, setSkip, setTotalMovies } =
  movieReducer.actions;

export const selectMovies = (state: RootState) => state.movie.movies;
export const selectFavorites = (state: RootState) => state.movie.favorites;
export const selectSkip = (state: RootState) => state.movie.skip;
export const selectLimit = (state: RootState) => state.movie.limit;
export const selectTotalMovies = (state: RootState) => state.movie.totalMovies;

export default movieReducer.reducer;
