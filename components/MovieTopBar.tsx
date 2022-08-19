import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setFilters } from '../store/filterReducer';
import { setSortBy } from '../store/sortReducer';
import styles from '../styles/movies.module.css';
import { Filters } from '../types/Filters';

const filters = Object.values(Filters);

const MovieTopBar = () => {
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();
  const selectedFilters = useSelector(selectFilters)

  console.log(Object.values(selectedFilters))

  const handleSort = (e: any) => {
    dispatch(setSortBy(e.target.value))
  };

  const handleFilters = (filter: string) => {
    const filters: any = {...selectedFilters};

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
            <option value='title_asc'>A-Z</option>
            <option value='title_desc'>Z-A</option>
          </select>
        </div>
      </div>
      <div className={styles.movie_filters}>
        {filters.map((filter, index) => (
          <button style={{
            backgroundColor: Object.values(selectedFilters).includes(filter) ? 'black' : 'white',
            color: Object.values(selectedFilters).includes(filter) ? 'white' : 'black'
          }} onClick={() => handleFilters(filter)} key={index}>
            {filter}
          </button>
        ))}
      </div>
    </>
  );
};

export default MovieTopBar;
