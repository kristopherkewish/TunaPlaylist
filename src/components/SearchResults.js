import React from 'react';
import styles from './SearchResults.module.css'

const SearchResults = ({searchResults}) => {
  return (
    <div className={styles.searchResults}>
      {searchResults}
    </div>
  );
};

export default SearchResults;