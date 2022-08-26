import InfiniteScroll from 'react-infinite-scroll-component';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/icons/Loader';
import MovieCard from '../../components/MovieCard';
import MovieTopBar from '../../components/MovieTopBar';
import Navbar from '../../components/Navbar';
import SearchTopBar from '../../components/SearchTopBar';
import { getAllMovies } from '../../services/movies/api';
import { getUniqueMovies } from '../../services/movies/helper';

import { selectFilters } from '../../store/filterReducer';
import {
  selectLimit,
  selectMovies,
  selectSkip,
  selectTotalMovies,
  setFavorites,
  setMovies,
  setSkip,
} from '../../store/movieReducer';
import {
  selectSearchKey,
  selectSearchResults,
} from '../../store/searchReducer';
import { selectSortBy } from '../../store/sortReducer';
import styles from '../../styles/movies.module.css';
import { Movie, QueryParams } from '../../types/Movie';
import Spinner from '../../components/icons/Spinner';
import { selectCurrentTheme } from '../../store/themeReducer';

const Movies: NextPage = () => {
  const currentTheme = useSelector(selectCurrentTheme)
  const totalMovies = useSelector(selectTotalMovies);
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const searchKey = useSelector(selectSearchKey);
  const searchResults = useSelector(selectSearchResults);

  const filters = useSelector(selectFilters);
  const sortBy = useSelector(selectSortBy);
  const limit = useSelector(selectLimit);
  const skip = useSelector(selectSkip);

  const params: QueryParams = {
    ...filters,
    sortBy,
    limit,
    skip,
  };

  const setFavoriteMovies = (data: Movie[]) => {
    dispatch(setMovies(movies.concat(data)));
    dispatch(setFavorites());
  };

  const setUniqueMoviesWithoutConcat = (data: Movie[]) => {
    const uniqueMovies = getUniqueMovies(data);
    dispatch(setMovies(uniqueMovies));
  };

  const setUniqueMoviesWithConcat = (data: Movie[]) => {
    const uniqueMovies = getUniqueMovies(movies.concat(data));
    dispatch(setMovies(uniqueMovies));
  };

  const runAfterDataFetch = () => {
    setLoading(false);
    dispatch(setSkip(1));
  };

  const loadMore = async () => {
    setTimeout(async () => {
      const res = await getAllMovies(params);

      if (res?.data.length < limit) {
        setHasMore(false);
      }
      setFavoriteMovies(res?.data);
      setUniqueMoviesWithConcat(res?.data);
      dispatch(setSkip(1));
    }, 2000);
  };

  const getMovies = async () => {
    setLoading(true);

    setTimeout(async () => {
      const res = await getAllMovies(params);

      setFavoriteMovies(res?.data);
      setUniqueMoviesWithoutConcat(res?.data);

      runAfterDataFetch();
    }, 2000);
  };

  useEffect(() => {
    getMovies();
    setHasMore(true);
  }, [filters, sortBy, totalMovies]);
  return (
    <>
      <div className={styles.container}>
        <Navbar />

        {searchKey && searchResults && searchResults.length > 0 && (
          <SearchTopBar />
        )}

        <div className={styles.movies_wrapper}>
          {searchResults &&
            searchResults.length > 0 &&
            searchResults.map((movie: Movie) => (
              <MovieCard {...movie} key={movie.imdbID} />
            ))}
        </div>

        <MovieTopBar />

        {loading ? (
          <Spinner />
        ) : (
          <div id='movies_list'>
            <InfiniteScroll
              dataLength={movies.length}
              next={loadMore}
              hasMore={hasMore}
              loader={hasMore && <Loader color={currentTheme === 'light' ? '#000' : '#fff'} />}
              className={styles.movies_wrapper}
            >
              {movies &&
                movies.length > 0 &&
                movies.map((movie: Movie) => (
                  <MovieCard {...movie} key={movie.id} />
                ))}
            </InfiniteScroll>
          </div>
        )}
      </div>
    </>
  );
};

export default Movies;
