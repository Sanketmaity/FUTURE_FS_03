import { Movie } from '../context/BookingContext';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Avengers: Endgame',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    rating: 8.4,
    duration: '3h 1m',
    genre: ['Action', 'Adventure', 'Drama'],
    language: ['English', 'Hindi'],
    description: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos\' actions and restore balance to the universe.',
    releaseDate: '2019-04-26',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'],
    director: 'Anthony Russo, Joe Russo'
  },
  {
    id: '2',
    title: 'The Dark Knight',
    poster: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg',
    rating: 9.0,
    duration: '2h 32m',
    genre: ['Action', 'Crime', 'Drama'],
    language: ['English'],
    description: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations.',
    releaseDate: '2008-07-18',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine'],
    director: 'Christopher Nolan'
  },
  {
    id: '3',
    title: 'Inception',
    poster: 'https://images.pexels.com/photos/7991464/pexels-photo-7991464.jpeg',
    rating: 8.8,
    duration: '2h 28m',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    language: ['English'],
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    releaseDate: '2010-07-16',
    cast: ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy', 'Ellen Page'],
    director: 'Christopher Nolan'
  },
  {
    id: '4',
    title: 'Spider-Man: No Way Home',
    poster: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg',
    rating: 8.2,
    duration: '2h 28m',
    genre: ['Action', 'Adventure', 'Fantasy'],
    language: ['English', 'Hindi'],
    description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',
    releaseDate: '2021-12-17',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch', 'Jacob Batalon'],
    director: 'Jon Watts'
  },
  {
    id: '5',
    title: 'Interstellar',
    poster: 'https://images.pexels.com/photos/7991470/pexels-photo-7991470.jpeg',
    rating: 8.6,
    duration: '2h 49m',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    language: ['English'],
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    releaseDate: '2014-11-07',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    director: 'Christopher Nolan'
  },
  {
    id: '6',
    title: 'The Matrix',
    poster: 'https://images.pexels.com/photos/7991583/pexels-photo-7991583.jpeg',
    rating: 8.7,
    duration: '2h 16m',
    genre: ['Action', 'Sci-Fi'],
    language: ['English'],
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    releaseDate: '1999-03-31',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Hugo Weaving'],
    director: 'Lana Wachowski, Lilly Wachowski'
  }
];