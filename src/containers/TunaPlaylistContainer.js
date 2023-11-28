import React, { useState,useEffect } from 'react';
import {handleLoginClick, getAccessTokenFromUrl} from '../modules/getAuthToken';
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
  // state to store the track URI's when exporting
  const [trackURIList, setTrackURIList] = useState([]);
  // state to store the auth token and expiry time
  const [accessToken, setAccessToken] = useState('');
  const [expiryTime, setExpiryTime] = useState(0);

  useEffect(() => {
    // Function to handle access token expiration check
    const checkTokenExpiration = () => {
      if (Date.now() > expiryTime) {
        // Token has expired, perform logout or reauthentication
        setAccessToken('');
        setExpiryTime(0);
        localStorage.removeItem('spotifyAccessToken'); // Remove token from localStorage
      }
    };

    // Check token expiration when expiryTime changes
    checkTokenExpiration();

    // Set up a timer to periodically check token expiration (for example, every minute)
    const tokenExpirationTimer = setInterval(checkTokenExpiration, 60000); // 1 minute interval

    // Cleanup timer on component unmount
    return () => {
      clearInterval(tokenExpirationTimer);
    };
  }, [expiryTime]);

  // Function to extract access token from URL fragment and set expiry time
  useEffect(() => {
    const {token, expiryTime} = getAccessTokenFromUrl();
    setExpiryTime(token);
    setAccessToken(expiryTime);
  }, []);


  const handleSearchChange = ({target}) => {
    setSearchText(target.value);
  };

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

  const handleExportClick = () => {
    // create a new array with all the URI's of the tracks in the tracklist
    const newTrackURIList = tracklist.map(track => track.uri);
    // set the tracklistURI state to the new array
    setTrackURIList(newTrackURIList);
  };

  return (
    <div>
      <div className={styles.searchBar}><SearchBar value={searchText} handleChange={handleSearchChange} handleClick={handleSearchClick}/></div>
      <div className={styles.container}>
        <button className={styles.loginBtn} onClick={handleLoginClick}>Login</button>
        <div className={styles.searchResults}><SearchResults searchResults={searchResults} handleResultsCardClick={handleResultsCardClick} /></div>
        <div className={styles.playlist}><Playlist tracklist={tracklist} handlePlaylistCardClick={handlePlaylistCardClick} playlistTitle={playlistTitle} handlePlaylistTitleChange={handlePlaylistTitleChange} handleExportClick={handleExportClick} /></div>
      </div>
    </div>
  );
};

export default TunaPlaylistContainer;
