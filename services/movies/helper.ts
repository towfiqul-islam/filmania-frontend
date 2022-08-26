import { HashedImdb, Movie, SearchResult } from '../../types/Movie';
import { getUserFavorites } from './api';

export const prepareSearchResults = (movies?: SearchResult[]) => {
  return movies?.map((movie?: SearchResult) => ({
    title: movie?.Title,
    year: movie?.Year,
    imdbID: movie?.imdbID,
    type: movie?.Type,
    poster: movie?.Poster,
  })) as Movie[];
};

export const filterSearchResults = (
  searchResults?: Movie[],
  favorites?: string[]
) => {
  if (searchResults?.length && favorites?.length) {
    for (let i = 0; i < searchResults.length; i++) {
      if (favorites.includes(searchResults[i].imdbID)) {
        searchResults.splice(i, 1);
      }
    }
  }

  return searchResults;
};

// const extractImdbIDs = (movies: Movie[]) => {
//   let imdbIds: string[] = [];
//   for (const movie of movies) {
//     imdbIds.push(movie.imdbID);
//   }

//   return imdbIds;
// };

export const getFavorites = (movies: Movie[]) => {
  let favorites: Movie[] = [];
  if (movies.length) {
    const userId = localStorage.getItem('userId') || '';

    favorites = movies.filter((movie: Movie) => {
      return movie.userId === parseInt(userId);
    });
  }

  return favorites;
};

export const getUniqueMovies = (movies: Movie[]) => {
  const hashedImdbIds: HashedImdb = {};
  let uniqueMovies: Movie[] = [];

  for (const movie of movies) {
    if (!hashedImdbIds[movie.imdbID]) {
      hashedImdbIds[movie.imdbID] = 1;
      uniqueMovies.push(movie);
    }
  }

  return uniqueMovies;
};

export const getFavoriteImdbs = async () => {
  let ids = [];
  const res = await getUserFavorites();
  const imdbIds = res?.data;
  for (const id of imdbIds) {
    ids.push(id.imdbID);
  }
  return ids;
};
