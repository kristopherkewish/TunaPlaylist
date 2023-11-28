const convertDataFormat = (tracksObject) => {
    const convertedTrackObjects = [];
    // iterate through the whole tracks.items array
    tracksObject.tracks.items.forEach(track => {
      // for each track, extract the title, artist, album and uri and store in separate variables
      const title = track.name;
      const artist = track.artists[0].name;
      const album = track.album.name;
      const uri = track.uri;

      // use these variables to create a track object (similar to the mock data objects)
      const newTrackObject = {
        title: title,
        artist: artist,
        album: album,
        id: uri, // leaving this code in so I do not have to change all the code referring to id's later
        uri: uri
      };

      // push this track object to an array
      convertedTrackObjects.push(newTrackObject);
    });

    return convertedTrackObjects;
}

export default convertDataFormat;