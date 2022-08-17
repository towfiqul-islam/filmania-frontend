import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import InfiniteLoader from '../../components/icons/InfiniteLoader';
import MovieCard from '../../components/MovieCard';
import MovieTopBar from '../../components/MovieTopBar';
import Navbar from '../../components/Navbar';
import { initiateLoadMore } from '../../helper/utils';
import styles from '../../styles/movies.module.css';
import { data, data2, data3 } from './data';

let totalLength = data.length + data2.length + data3.length;

const Movies: NextPage = () => {
  const [movies, setMovies] = useState(data);
  const [loading, setLoading] = useState(false);

  let temp = movies;
  const loadMore = () => {
    if (temp.length < totalLength) setLoading(true);

    setTimeout(() => {
      if (temp.length === 11) {
        temp = temp.concat(data2);
        setMovies(temp);
      } else if (temp.length === 23) {
        console.log('movies')
        temp = temp.concat(data2, data3);
        setMovies(temp);
      }
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    initiateLoadMore('movies_list', loadMore);
  }, [temp.length < totalLength]);
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
