import React from 'react';
import styles from './SongCard.module.css'

const SongCard = ({title, artist, album}) => {
  return (
    <div className={styles.songCard}>
        <h1>{title}</h1>
        <h2>{artist} // {album}</h2>
    </div>
  );
};

export default SongCard;