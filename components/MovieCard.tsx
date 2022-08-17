import React from 'react'

type MovieProps =  {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

const MovieCard = (movie: MovieProps) => {
  return (
    <div>MovieCard - {movie.title}</div>
  )
}

export default MovieCard