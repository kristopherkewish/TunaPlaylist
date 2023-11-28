import React from 'react';
import SongCard from './SongCard';
import styles from './SearchResults.module.css'

const SearchResults = ({searchResults, handleResultsCardClick}) => {
  return (
    <div className={styles.searchResults}>
      <h1 className={styles.resultsHeading}>Results</h1>
      {searchResults.map((track,index) => 
      <SongCard
        key={index}
        title={track.title} 
        artist={track.artist} 
        album={track.album}
        id={track.id}  
        handleClick={handleResultsCardClick}
      />)}
    </div>
  );
};

export default SearchResults;