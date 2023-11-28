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
  // state to keep track of the playlist title (initial value Playlist Title)
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Title');

  const handleSearchChange = ({target}) => {
    setSearchText(target.value);
  };

  // add a change handler for the playlist title textbox. It should take the {target} as the argument and set its value to a new state. The textbox's value should be set to this state so that it is the centre of truth. To do this you will need to define a new useState [playlistTitle, setPlaylistTitle], pass playlistTitle as a prop to the Playlist component, and then set the value prop of the text input within the Playlist component to the playlistTitle prop. You will also need to pass the handler function to the Playlist component through a prop, then assign it as the change handler of the text input in the Playlist component.
  const handlePlaylistTitleChange = ({target}) => {
    // get the targets value and save it in a variable called newPlaylistTitle
    const newPlaylistTitle = target.value;

    // set the playlistTitle state to newPlaylistTitle
    setPlaylistTitle(newPlaylistTitle);
  }

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
        <div className={styles.playlist}><Playlist tracklist={tracklist} handlePlaylistCardClick={handlePlaylistCardClick} playlistTitle={playlistTitle} handlePlaylistTitleChange={handlePlaylistTitleChange} /></div>
      </div>
    </div>
  );
};

export default TunaPlaylistContainer;
