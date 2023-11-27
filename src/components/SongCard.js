import React from 'react';
import styles from './SongCard.module.css'

const SongCard = () => {
  return (
    <div className={styles.songCard}>
        <h1>SONG TITLE</h1>
        <h2>Artist // Album</h2>
    </div>
  );
};

export default SongCard;