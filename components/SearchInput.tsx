import React from 'react';
import SearchIcon from './icons/SearchIcon';
import styles from '../styles/navbar.module.css'

const SearchInput = () => {
  return (
    <>
      <div className={styles.search_input}>
        <SearchIcon />
        <input placeholder='The godfather' type='text' />
      </div>
    </>
  );
};

export default SearchInput;
