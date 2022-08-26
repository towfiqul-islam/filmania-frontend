import { HashedImdb, Movie, SearchResult } from '../../types/Movie';

export const prepareSearchResults = (movies?: SearchResult[]) => {
  return movies?.map((movie?: SearchResult) => ({
    title: movie?.Title,
    year: movie?.Year,
    imdbID: movie?.imdbID,
    type: movie?.Type,
    poster: movie?.Poster,
  }));
};

export const filterSearchResults = (
  searchResults?: SearchResult[],
  favorites?: SearchResult[]
) => {
  if (searchResults?.length && favorites?.length) {
    const favoritesImdb = extractImdbIDs(favorites);

    for (let i = 0; i < searchResults.length; i++) {
      if (favoritesImdb.includes(searchResults[i].imdbID)) {
        searchResults.splice(i, 1);
      }
    }
  }

  return searchResults;
};

const extractImdbIDs = (movies: SearchResult[]) => {
  let imdbIds: string[] = [];
  for (const movie of movies) {
    imdbIds.push(movie.imdbID);
  }

  return imdbIds;
};

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
