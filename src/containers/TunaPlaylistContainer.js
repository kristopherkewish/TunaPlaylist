import React, { useState, useEffect } from 'react';
import Playlist from '../components/Playlist';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SongCard from '../components/SongCard';
import styles from './TunaPlaylistContainer.module.css';
import tracks from '../mockData';

const TunaPlaylistContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([<SongCard title='Your search results will appear here' artist='' album='' />]);

  const handleSearchChange = ({target}) => {
    setSearchText(target.value);
  };

  const handleSearchClick = () => {
    const filteredTracks = tracks.filter(track => {
      return track.title.toLowerCase().includes(searchText.toLowerCase()) || track.artist.toLowerCase().includes(searchText.toLowerCase()) || track.album.toLowerCase().includes(searchText.toLowerCase())
    });

    console.log(filteredTracks);

    const songCards = filteredTracks.map(track => <SongCard title={track.title} artist={track.artist} album={track.album} />);

    console.log(songCards);

    setSearchResults(songCards);
  }

  return (
    <div>
      <div className={styles.searchBar}><SearchBar value={searchText} handleChange={handleSearchChange} handleClick={handleSearchClick}/></div>
      <div className={styles.container}>
        <div className={styles.searchResults}><SearchResults searchResults={searchResults}/></div>
        <div className={styles.playlist}><Playlist  /></div>
      </div>
    </div>
  );
};

export default TunaPlaylistContainer;
