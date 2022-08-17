import React from 'react';
import styles from '../styles/movies.module.css';

const MovieTopBar = () => {
  return (
    <>
      <div className={styles.movies_top_bar}>
        <h3>Movies & TVs</h3>

        <div>
            <label htmlFor="sort_by">Sort by: </label>
            <select id='sort_by'>
                <option value='movie'>Movie</option>
                <option value='tv'>TV</option>
            </select>
        </div>

      </div>
    </>
  );
};

export default MovieTopBar;
