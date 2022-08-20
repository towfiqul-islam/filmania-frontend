interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  

export const prepareSearchResults = (movies?: [Movie]) => {
    return movies?.map((movie?: Movie) => ({
      title: movie?.Title,
      year: movie?.Year,
      imdbID: movie?.imdbID,
      type: movie?.Type,
      poster: movie?.Poster,
    }));
  };
  
  export const filterSearchResults = (searchResults?: any, favorites?: any) => {
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
  
  const extractImdbIDs = (movies: [Movie]) => {
    let imdbIds = [];
    for (const movie of movies) {
      imdbIds.push(movie.imdbID);
    }
  
    return imdbIds;
  };
  
  export const getFavorites = (movies: any) => {
    let favorites = [];
    if (movies.length) {
      const userId = localStorage.getItem('userId') || '';
  
      favorites = movies.filter((movie: any) => {
        return movie.userId === parseInt(userId);
      });
  
    }
  
    return favorites;
  };
  
  export const getUniqueMovies = (movies: any) => {
    const hashedImdbIds: any = {};
    let uniqueMovies = [];
  
    for (const movie of movies) {
      if (!hashedImdbIds[movie.imdbID]) {
        hashedImdbIds[movie.imdbID] = 1;
        uniqueMovies.push(movie);
      }
    }
  
    return uniqueMovies;
  };
  