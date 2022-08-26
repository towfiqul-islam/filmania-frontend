import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFavorites } from '../services/movies/helper';
import { Movie } from '../types/Movie';

import { RootState } from './store';

interface MovieState {
  movies: Movie[],
  favorites: Movie[],
  favoriteImdbIds: string[],
  limit: number,
  skip: number,
  totalMovies: number
}

const initialState: MovieState = {
    movies: [],
    favorites: [],
    favoriteImdbIds: [],
    limit: 2,
    skip: 0,
    totalMovies: 0,
}

export const movieReducer = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFavorites: (state) => {
      const favorites = getFavorites(state.movies);
      state.favorites = favorites;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setSkip: (state, action: PayloadAction<number>) => {
      if (action.payload === 1) {
        state.skip = state.movies.length;
      } else {
        state.skip = action.payload;
      }
    },
    setTotalMovies: (state, action: PayloadAction<number>) => {
      state.totalMovies = action.payload;
    },
    setFavoriteImdbIds: (state, action: PayloadAction<string[]>) => {
      state.favoriteImdbIds = action.payload
    }
  },
});

export const { setMovies, setFavorites, setLimit, setSkip, setTotalMovies, setFavoriteImdbIds } =
  movieReducer.actions;

export const selectMovies = (state: RootState) => state.movie.movies;
export const selectFavorites = (state: RootState) => state.movie.favorites;
export const selectSkip = (state: RootState) => state.movie.skip;
export const selectLimit = (state: RootState) => state.movie.limit;
export const selectTotalMovies = (state: RootState) => state.movie.totalMovies;
export const selectFavoriteImdbIds = (state: RootState) => state.movie.favoriteImdbIds;

export default movieReducer.reducer;
