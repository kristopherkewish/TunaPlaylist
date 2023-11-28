import React, { useState } from 'react';
import Playlist from '../components/Playlist';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import styles from './TunaPlaylistContainer.module.css';
import tracks from '../mockData';

const TunaPlaylistContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tracklist, setTracklist] = useState([]);

  const handleSearchChange = ({target}) => {
    setSearchText(target.value);
  };

  const handleResultsCardClick = (id) => {
    // get track from mock data based on the id stored in the card prop
    const newTrack = tracks[id];

    // add track to the trackList state
    setTracklist(prevTrackList => [newTrack, ...prevTrackList]);
  }; 

  const handlePlaylistCardClick = (id) => {
    // this function will be run when a SongCard in the Playlist component is clicked e.g the SongCards in the Playlist component will be defined with this function as the onClick handler. Therefore, this function will need to be passed down to the Playlist component as a prop, then defined as the onClick handler in the map function that renders the SongCards.

    // Once clicked, filter the tracklist and keep only the tracks that DO NOT have the same id as the card. Put this in a new variable called newTracklist
    const newTracklist = tracklist.filter(track => track.id !== id);

    // Set the state tracklist to the newTracklist
    setTracklist(newTracklist);
  }

  const handleSearchClick = () => {
    const filteredTracks = tracks.filter(track => {
      return track.title.toLowerCase().includes(searchText.toLowerCase()) || track.artist.toLowerCase().includes(searchText.toLowerCase()) || track.album.toLowerCase().includes(searchText.toLowerCase())
    });

    setSearchResults(filteredTracks);
  }

  return (
    <div>
      <div className={styles.searchBar}><SearchBar value={searchText} handleChange={handleSearchChange} handleClick={handleSearchClick}/></div>
      <div className={styles.container}>
        <div className={styles.searchResults}><SearchResults searchResults={searchResults} handleResultsCardClick={handleResultsCardClick} /></div>
        <div className={styles.playlist}><Playlist tracklist={tracklist} handlePlaylistCardClick={handlePlaylistCardClick}/></div>
      </div>
    </div>
  );
};

export default TunaPlaylistContainer;
