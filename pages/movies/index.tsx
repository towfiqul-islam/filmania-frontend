import type { NextPage } from 'next';
import MovieCard from '../../components/MovieCard';
import Navbar from '../../components/Navbar';
import styles from '../../styles/movies.module.css';
import { data } from './data';

const Movies: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        {data &&
          data.map((movie) => (
            <div>
              <MovieCard {...movie}/>
            </div>
          ))}
      </div>
    </>
  );
};

export default Movies;
