import React from 'react';
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchBar} type="text" />
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default SearchBar;
