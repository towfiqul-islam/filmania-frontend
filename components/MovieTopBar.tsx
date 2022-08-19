import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setFilters } from '../store/filterReducer';
import { setSortBy } from '../store/sortReducer';
import styles from '../styles/movies.module.css';


const MovieTopBar = () => {
  const userId = localStorage.getItem('userId') || '';
  const filters = ['tv', 'movie', userId];
  const dispatch = useDispatch();
  const selectedFilters = useSelector(selectFilters)

  const isFilterSelected = (filter: string) => Object.values(selectedFilters).includes(filter);

  console.log({selectedFilters: Object.values(selectedFilters)});

  const handleSort = (e: any) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleFilters = (filter: string) => {
    const filters: any = { ...selectedFilters };

    if (filter === userId) {
      filters['userId'] = userId;
    } else {
      filters['type'] = filter;
    }

    dispatch(setFilters(filters));
  };

  const handleClear = () => {
    dispatch(setFilters({}));
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
          <button
            className={isFilterSelected(filter) ? styles.movie_filters_btn_selected : styles.movie_filters_btn}
            onClick={() => handleFilters(filter)}
            key={index}
          >
            {filter === userId ? 'favorites' : filter}
          </button>
        ))}
        {Object.values(selectedFilters).length > 0 && (
          <span className={styles.filter_clear_btn} onClick={handleClear}>
            Clear
          </span>
        )}
      </div>
    </>
  );
};

export default MovieTopBar;
