import React from 'react';
import SongCard from './SongCard';
import styles from './Playlist.module.css'

const Playlist = () => {
  return (
    <div className={styles.playlist}>
      <input className={styles.playlistTitleInput} type="text" value="Playlist Title"/>
      <SongCard />
      <button className={styles.exportPlaylistBtn}>Export</button>
    </div>
  );
};

export default Playlist;