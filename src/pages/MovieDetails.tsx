import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Calendar, User, Video } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { movies } from '../data/movies';
import { useBooking } from '../context/BookingContext';

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { setSelectedMovie } = useBooking();
  
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Movie not found</h2>
          <Link to="/" className="text-red-500 hover:text-red-400">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const handleBookTickets = () => {
    setSelectedMovie(movie);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Movie Poster */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${movie.poster})` }}
        ></div>
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-6 lg:space-y-0 lg:space-x-8">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-64 h-96 object-cover rounded-lg shadow-2xl"
              />
              
              <div className="text-center lg:text-left text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{movie.title}</h1>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className="flex items-center space-x-1 bg-black bg-opacity-50 px-3 py-1 rounded-md">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold">{movie.rating}/10</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-black bg-opacity-50 px-3 py-1 rounded-md">
                    <Clock className="w-5 h-5" />
                    <span>{movie.duration}</span>
                  </div>
                  
                  <div className="bg-black bg-opacity-50 px-3 py-1 rounded-md">
                    {movie.genre.join(' • ')}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.language.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-md"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                
                <SignedIn>
                  <Link
                    to={`/movie/${movie.id}/theaters`}
                    onClick={handleBookTickets}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
                  >
                    Book Tickets
                  </Link>
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105">
                      Sign In to Book Tickets
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the Movie */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About the Movie</h2>
              <p className="text-gray-300 leading-relaxed">{movie.description}</p>
            </div>

            {/* Cast and Crew */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cast & Crew</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <Video className="w-5 h-5 mr-2" />
                    Director
                  </h3>
                  <p className="text-gray-300">{movie.director}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Cast
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map((actor) => (
                      <span
                        key={actor}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Movie Info Card */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Movie Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Release Date</span>
                  <span className="text-white">
                    {new Date(movie.releaseDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-white">{movie.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Genre</span>
                  <span className="text-white">{movie.genre.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Language</span>
                  <span className="text-white">{movie.language.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Book Tickets Card */}
            <div className="bg-red-900 bg-opacity-50 rounded-lg p-6 border border-red-800">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Watch?</h3>
              <p className="text-red-100 mb-4">
                Book your tickets now and enjoy this amazing movie experience!
              </p>
              <SignedIn>
                <Link
                  to={`/movie/${movie.id}/theaters`}
                  onClick={handleBookTickets}
                  className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                >
                  Book Tickets Now
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                    Sign In to Book
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;