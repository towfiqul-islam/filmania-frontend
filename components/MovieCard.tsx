import React from 'react';
import styles from '../styles/movies.module.css';
import { Movie } from '../types/Movie';

type MovieProps = Movie;

const MovieCard = (movie: MovieProps) => {
  return (
    <div className={styles.movie_card}>
      <img src={movie.poster} />
      <p>{movie.title}</p>
      <p>{movie.year}</p>
    </div>
  );
};

export default MovieCard;
