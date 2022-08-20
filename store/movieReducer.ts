import { createSlice } from '@reduxjs/toolkit';
import { getFavorites } from '../services/movies/helper';

import { RootState } from './store';

export const movieReducer = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    favorites: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFavorites: (state) => {
      const favorites = getFavorites(state.movies);

      state.favorites = favorites;
    },
  },
});



export const { setMovies, setFavorites } = movieReducer.actions;

export const selectMovies = (state: RootState) => state.movie.movies;
export const selectFavorites = (state: RootState) => state.movie.favorites;

export default movieReducer.reducer;
