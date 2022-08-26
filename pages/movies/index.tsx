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
import { Movie } from '../../types/Movie';

const Movies: NextPage = () => {
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

  const params: any = {
    ...filters,
    sortBy,
    limit,
    skip,
  };

  const setFavoriteMovies = (data: any) => {
    dispatch(setMovies(movies.concat(data)));
    dispatch(setFavorites());
  };

  const setUniqueMoviesWithoutConcat = (data: any) => {
    const uniqueMovies = getUniqueMovies(data);
    dispatch(setMovies(uniqueMovies));
  };

  const setUniqueMoviesWithConcat = (data: any) => {
    const uniqueMovies = getUniqueMovies(movies.concat(data));
    dispatch(setMovies(uniqueMovies));
  };

  const runAfterDataFetch = () => {
    setLoading(false);
    dispatch(setSkip(1));
  };

  const loadMore = async () => {
    setLoading(true);

    setTimeout(async () => {
      const res = await getAllMovies(params);

      if (res?.data.length < limit) {
        setHasMore(false);
      }

      setUniqueMoviesWithConcat(res?.data);
      runAfterDataFetch();
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

        <div id='movies_list'>
          <InfiniteScroll
            dataLength={movies.length}
            next={loadMore}
            hasMore={hasMore}
            loader={hasMore && <Loader color='#000' />}
            className={styles.movies_wrapper}
          >
            {movies &&
              movies.length > 0 &&
              movies.map((movie: Movie) => (
                <MovieCard {...movie} key={movie.id} />
              ))}
          </InfiniteScroll>
        </div>
        {/* {loading && <Loader color='#000' />} */}
      </div>
    </>
  );
};

export default Movies;
