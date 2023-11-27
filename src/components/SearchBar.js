import React from 'react';
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchBar} type="text" value={props.searchText} onChange={props.handleChange}/>
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default SearchBar;
