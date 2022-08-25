import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesCount } from '../services/movies/api';
import { selectFilters, setFilters } from '../store/filterReducer';
import { setSkip, setTotalMovies } from '../store/movieReducer';
import { setSortBy } from '../store/sortReducer';
import styles from '../styles/movies.module.css';

const WrappedMovieTopBar = () => {
  const userId = localStorage.getItem('userId') || '';
  const filters = ['series', 'movie', userId];
  const dispatch = useDispatch();
  const selectedFilters = useSelector(selectFilters);

  const isFilterSelected = (filter: string) =>
    Object.values(selectedFilters).includes(filter);

  // console.log({ selectedFilters: Object.values(selectedFilters) });

  const handleSort = (e: any) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleFilters = (filter: string) => {
    const filters: any = { ...selectedFilters };

    console.log(filter)

    if (filter === userId) {
      filters['userId'] = userId;
    } else {
      filters['type'] = filter;
    }

    dispatch(setSkip(0))
    dispatch(setFilters(filters));
  };

  const handleClear = () => {
    dispatch(setFilters({}));
  };

  async function getTotalMovies() {
    const res = await getMoviesCount();
    dispatch(setTotalMovies(res?.data.length));
  }

  useEffect(() => {
    getTotalMovies();
  }, []);

  return (
    <>
      <div className={styles.movies_top_bar}>
        <h3>Movies & Series</h3>

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
            className={
              isFilterSelected(filter)
                ? styles.movie_filters_btn_selected
                : styles.movie_filters_btn
            }
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

const MovieTopBar = React.memo(WrappedMovieTopBar);

export default MovieTopBar;
