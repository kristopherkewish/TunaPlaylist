// Mock data set to be used for building the website
const tracks = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    id: 0,
    uri: '28a923MQALPmFhbP'
  },
  {
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    id: 1,
    uri: 'Q38IgXv7rigadG00'
  },
  {
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    id: 2,
    uri: 'CI12Btzx2AncxGw2'
  },
  {
    title: 'drivers license',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    id: 3,
    uri: 'FSb6idQIl3Fv8lVN'
  },
  {
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'F*CK LOVE 3: OVER YOU',
    id: 4,
    uri: '8zz7GjqMJ5kLGOCl'
  },
  {
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    id: 5,
    uri: 'lLAaQ1kx8tUOaelk'
  },
  {
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    id: 6,
    uri: 'fHZACUqwpIu8xYW2'
  },
  {
    title: 'Montero (Call Me By Your Name)',
    artist: 'Lil Nas X',
    album: 'Montero',
    id: 7,
    uri: 'eRn31ehA9MA2dwpt'
  },
  {
    title: 'Peaches',
    artist: 'Justin Bieber',
    album: 'Justice',
    id: 8,
    uri: 'xK4xEx6EEleDjDgH'
  },
  {
    title: 'Kiss Me More',
    artist: 'Doja Cat ft. SZA',
    album: 'Planet Her',
    id: 9,
    uri: 'tplPTSOkaB5143jk'
  },
  {
    title: 'Wonderwall',
    artist: 'Oasis',
    album: "(What's the Story) Morning Glory?",
    id: 10,
    uri: '5Jz8lpgChTJ112Ra'
  },
  {
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    id: 11,
    uri: '70Potoz6ftJqg3tq'
  },
  {
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    id: 12,
    uri: 'dWFL5Gp0GRKwFt9p'
  },
  {
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    id: 13,
    uri: 'Dit0c7U6doxSFTYG'
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    album: 'Appetite for Destruction',
    id: 14,
    uri: 'ky8kX5PmlKraDjUk'
  },
  {
    title: 'Every Breath You Take',
    artist: 'The Police',
    album: 'Synchronicity',
    id: 15,
    uri: '2fHrct8heobrvCda'
  },
  {
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    album: 'Nevermind',
    id: 16,
    uri: 'rjHBt59g1Jw0xoab'
  },
  {
    title: 'Back in Black',
    artist: 'AC/DC',
    album: 'Back in Black',
    id: 17,
    uri: 'OO87WZvRscOsMmd1'
  },
  {
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    album: 'Highway 61 Revisited',
    id: 18,
    uri: 'di7BXjN4s7ya9J73'
  },
  {
    title: 'Hey Jude',
    artist: 'The Beatles',
    album: 'Hey Jude',
    id: 19,
    uri: 'Rmctot948mXWBb9L'
  },
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: '÷ (Divide)',
    id: 20,
    uri: 'igCZN3mRwFY5W1sN'
  },
  {
    title: 'Dance Monkey',
    artist: 'Tones and I',
    album: 'The Kids Are Coming',
    id: 21,
    uri: 'Gkj5DK6L89emlpoX'
  },
  {
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    album: 'x (Multiply)',
    id: 22,
    uri: 's0N57OGVRqDj3Tbm'
  },
  {
    title: 'Someone Like You',
    artist: 'Adele',
    album: '21',
    id: 23,
    uri: 'iEAxoOSLl7ymnMMq'
  },
  {
    title: 'Uptown Funk',
    artist: 'Mark Ronson ft. Bruno Mars',
    album: 'Uptown Special',
    id: 24,
    uri: 'HYV2xFVnIxX4YD8n'
  },
  {
    title: 'Havana',
    artist: 'Camila Cabello ft. Young Thug',
    album: 'Camila',
    id: 25,
    uri: 'fbloac7GY71xJ6sc'
  },
  {
    title: 'Old Town Road',
    artist: 'Lil Nas X ft. Billy Ray Cyrus',
    album: '7 EP',
    id: 26,
    uri: 'mi1iQLqMpdnfpU4p'
  },
  {
    title: 'Despacito',
    artist: 'Luis Fonsi ft. Daddy Yankee',
    album: 'Vida',
    id: 27,
    uri: 'm7fyAcgptrUPhNGi'
  },
  {
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    id: 28,
    uri: 'C4TMMqEcqPPiKyhr'
  },
  {
    title: 'Hello',
    artist: 'Adele',
    album: '25',
    id: 29,
    uri: 'LLNlarvZVhIKdU68'
  }
];

// Add a unique id to each of the tracks in order to access them later
tracks.forEach((track, index) => track.id = index);

export default tracks;