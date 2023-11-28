import React from 'react';
import SongCard from './SongCard'
import styles from './Playlist.module.css'

const Playlist = ({tracklist, handlePlaylistCardClick, playlistTitle, handlePlaylistTitleChange}) => {
  return (
    <div className={styles.playlist}>
      <input className={styles.playlistTitleInput} type="text" value={playlistTitle} onChange={handlePlaylistTitleChange} />
      {tracklist.map((track,index) => 
      <SongCard
        key={index}
        title={track.title} 
        artist={track.artist} 
        album={track.album}
        id={track.id}  
        handleClick={handlePlaylistCardClick}
      />)}
      <button className={styles.exportPlaylistBtn}>Export</button>
    </div>
  );
};

export default Playlist;