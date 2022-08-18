import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/filterReducer';
import styles from '../styles/movies.module.css';
import { Filters } from '../types/Filters';

const filters = Object.values(Filters);

const MovieTopBar = () => {
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();

  const handleSort = (e: any) => {
    console.log(e.target.value);
  };

  const handleFilters = (filter: string) => {
    const filters: any = {};

    if (filter === 'favorites') {
      filters['userId'] = userId;
    } else {
      filters['type'] = filter;
    }

    dispatch(setFilters(filters));
  };

  return (
    <>
      <div className={styles.movies_top_bar}>
        <h3>Movies & TVs</h3>

        <div>
          <label htmlFor='sort_by'>Sort by: </label>
          <select onChange={handleSort} id='sort_by'>
            <option value='release'>Release</option>
            <option value='a-z'>A-Z</option>
            <option value='z-a'>Z-A</option>
          </select>
        </div>
      </div>
      <div className={styles.movie_filters}>
        {filters.map((filter, index) => (
          <button onClick={() => handleFilters(filter)} key={index}>
            {filter}
          </button>
        ))}
      </div>
    </>
  );
};

export default MovieTopBar;
