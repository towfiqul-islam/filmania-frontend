import React from 'react';
import { addMovie } from '../services/movies/api';
import styles from '../styles/movies.module.css';
import { Movie } from '../types/Movie';

type MovieProps = Movie;

const MovieCard = (movie: MovieProps) => {
  const userId = localStorage.getItem('userId') || '';

  // let isFavorite = movie.userId?.toString() === userId.toString();

  const addNewMovie = async () => {
    const { title, year, imdbID, poster, type } = movie;
    const newMovie: Movie = {
      title,
      year,
      imdbID,
      poster,
      type,
      userId: parseInt(userId),
    };

    const res = await addMovie(newMovie);
    if (res?.statusText === 'Created') {
      window.location.reload();
    }
  };

  return (
    <div className={styles.movie_card}>
      {!movie?.userId && (
        <div onClick={addNewMovie} className={styles.add_button}>
          +
        </div>
      )}
      <img src={movie.poster} />
      <p>{movie.title}</p>
      <p>{movie.year}</p>
    </div>
  );
};

export default MovieCard;
