import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { Movie } from '../context/BookingContext';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-gray-900">
        <div className="relative overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{movie.rating}/10</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-red-400 transition-colors">
              {movie.title}
            </h3>
            <div className="flex items-center space-x-4 text-gray-300 text-sm">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{movie.duration}</span>
              </div>
              <span>{movie.genre.slice(0, 2).join(', ')}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {movie.language.map((lang) => (
              <span
                key={lang}
                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
              >
                {lang}
              </span>
            ))}
          </div>
          
          <SignedIn>
            <Link 
              to={`/movie/${movie.id}`}
              className="block w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200 text-center"
            >
              Book Tickets
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200">
                Sign In to Book
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;