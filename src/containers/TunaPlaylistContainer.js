import React, { useState, useEffect } from 'react';
import Playlist from '../components/Playlist';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import styles from './TunaPlaylistContainer.module.css'

const TunaPlaylistContainer = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = ({target}) => {
    setSearchText(target.value);
  };

  return (
    <div>
      <div className={styles.searchBar}><SearchBar value={searchText} handleChange={handleSearchChange}/></div>
      <div className={styles.container}>
        <div className={styles.searchResults}><SearchResults /></div>
        <div className={styles.playlist}><Playlist  /></div>
      </div>
    </div>
  );
};

export default TunaPlaylistContainer;
