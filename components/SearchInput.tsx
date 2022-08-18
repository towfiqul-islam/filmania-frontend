import React, { useState } from 'react';
import SearchIcon from './icons/SearchIcon';
import styles from '../styles/navbar.module.css';
import { searchMovie } from '../services/movie.services';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../store/searchReducer';
import { prepareSearchResults } from '../helper/utils';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchKey = e.target.value;
    setSearch(searchKey);

    if (searchKey.length >= 3) {
      setTimeout(async () => {
        const res = await searchMovie(searchKey);
        const movies = res?.data.Search;
        const preparedSearchResults = prepareSearchResults(movies);
        const searchResults = setSearchResults(preparedSearchResults);
        dispatch(searchResults);
      }, 500);
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
