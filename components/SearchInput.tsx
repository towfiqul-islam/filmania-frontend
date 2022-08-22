import React from 'react';
import SearchIcon from './icons/SearchIcon';
import styles from '../styles/navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchResults,
  setSearchKey,
  selectSearchKey,
} from '../store/searchReducer';
import { selectFavorites } from '../store/movieReducer';
import { searchMovie } from '../services/movies/api';
import {
  filterSearchResults,
  prepareSearchResults,
} from '../services/movies/helper';

const SearchInput = () => {
  const search = useSelector(selectSearchKey);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchKey = e.target.value || '';
    dispatch(setSearchKey(searchKey));

    if (searchKey.length >= 3) {
      setTimeout(async () => {
        const res = await searchMovie(searchKey);
        const results = res?.data.Search;
        const preparedSearchResults = prepareSearchResults(results);
        const filteredSearchResults = filterSearchResults(
          preparedSearchResults,
          favorites
        );
        const searchResults = setSearchResults(filteredSearchResults);
        dispatch(searchResults);
      }, 500);
    } else {
      dispatch(setSearchResults([]));
    }
  };

  return (
    <>
      <div className={styles.search_input}>
        <SearchIcon />
        <input
          type='text'
          name='search'
          value={search}
          onChange={handleChange}
          placeholder='The godfather'
        />
      </div>
    </>
  );
};

export default SearchInput;
