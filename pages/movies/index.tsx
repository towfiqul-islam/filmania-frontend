import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InfiniteLoader from '../../components/icons/InfiniteLoader';
import MovieCard from '../../components/MovieCard';
import MovieTopBar from '../../components/MovieTopBar';
import Navbar from '../../components/Navbar';
import { initiateLoadMore } from '../../helper/utils';
import { selectSearchResults } from '../../store/searchReducer';
import styles from '../../styles/movies.module.css';
import { data } from './data';

const Movies: NextPage = () => {
  const [movies, setMovies] = useState(data);
  const [loading, setLoading] = useState(false);

  const searchResults = useSelector(selectSearchResults);

  const loadMore = () => {};

  useEffect(() => {
    initiateLoadMore('movies_list', loadMore);
    if (searchResults?.length) setMovies(searchResults);
  }, [searchResults?.length > 0]);
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <MovieTopBar />
        <div id='movies_list' className={styles.movies_wrapper}>
          {movies &&
            movies.map((movie, index) => <MovieCard {...movie} key={index} />)}
        </div>
        {loading && <InfiniteLoader />}
      </div>
    </>
  );
};

export default Movies;
