import React from 'react';
import Playlist from '../components/Playlist';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const TunaPlaylistContainer = () => {
  return (
    <div>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
};

export default TunaPlaylistContainer;
