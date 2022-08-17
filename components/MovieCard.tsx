import React from 'react'
import styles from '../styles/movies.module.css';

type MovieProps =  {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

const MovieCard = (movie: MovieProps) => {
  return (
    <div className={styles.movie_card}>
      <img src={movie.poster}/>
      <p>{movie.title}</p>
      <p>{movie.year}</p>
    </div>
  )
}

export default MovieCard