import React from 'react';
import SongCard from './SongCard';
import styles from './SearchResults.module.css'

const SearchResults = () => {
  return (
    <div className={styles.searchResults}>
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </div>
  );
};

export default SearchResults;