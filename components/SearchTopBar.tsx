import React from 'react'
import { useSelector } from 'react-redux'
import { selectSearchKey } from '../store/searchReducer'
import styles from '../styles/movies.module.css'

const SearchTopBar = () => {
    const searchKey = useSelector(selectSearchKey)
  return (
    <>
        <div>
            <h3 className={styles.search_top_bar}>Search results for - {searchKey}</h3>
        </div>
    </>
  )
}

export default SearchTopBar