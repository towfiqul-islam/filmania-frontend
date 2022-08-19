import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InfiniteLoader from '../../components/icons/InfiniteLoader';
import MovieCard from '../../components/MovieCard';
import MovieTopBar from '../../components/MovieTopBar';
import Navbar from '../../components/Navbar';
import SearchTopBar from '../../components/SearchTopBar';
import { initiateLoadMore } from '../../helper/utils';
import { getAllMovies } from '../../services/movie.services';
import { selectFilters } from '../../store/filterReducer';
import {
  selectSearchKey,
  selectSearchResults,
} from '../../store/searchReducer';
import { selectSortBy } from '../../store/sortReducer';
import styles from '../../styles/movies.module.css';
import { Movie } from '../../types/Movie';

const Movies: NextPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchKey = useSelector(selectSearchKey);
  const searchResults = useSelector(selectSearchResults);

  const filters = useSelector(selectFilters)

  // console.log(filters)

  const sortBy = useSelector(selectSortBy)

  // console.log(sortBy)
  

  const loadMore = () => {};

  const getMovies = async () => {
    const params = {
      ...filters,
      sortBy
    }
    const res = await getAllMovies(params);
    setMovies(res?.data)
  }

  useEffect(() => {
    getMovies()
    // initiateLoadMore('movies_list', loadMore);
  }, [filters, sortBy]);
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

        <div id='movies_list' className={styles.movies_wrapper}>
          {movies && movies.length > 0 &&
            movies.map((movie: Movie) => <MovieCard {...movie} key={movie.id} />)}
        </div>
        {loading && <InfiniteLoader />}
      </div>
    </>
  );
};

export default Movies;
