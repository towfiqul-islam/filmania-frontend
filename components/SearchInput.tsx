import React from 'react';
import SearchIcon from './icons/SearchIcon';
import styles from '../styles/navbar.module.css';
import { searchMovie } from '../services/movie.services';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchResults,
  setSearchKey,
  selectSearchKey,
} from '../store/searchReducer';
import { prepareSearchResults } from '../helper/utils';

const SearchInput = () => {
  const search = useSelector(selectSearchKey);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchKey = e.target.value || '';
    dispatch(setSearchKey(searchKey));

    if (searchKey.length >= 3) {
      setTimeout(async () => {
        const res = await searchMovie(searchKey);
        const results = res?.data.Search;
        const preparedSearchResults = prepareSearchResults(results);
        const searchResults = setSearchResults(preparedSearchResults);
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
