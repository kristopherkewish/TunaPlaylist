import React from 'react';
import SongCard from './SongCard';

const Playlist = () => {
  return (
    <div id="playlist">
      <input id="playlistTitleInput" type="text" />
      <SongCard />
      <button id="exportPlaylistBtn">Export</button>
    </div>
  );
};

export default Playlist;