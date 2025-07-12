import React, { useState } from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const genres = ['All', 'Action', 'Adventure', 'Drama', 'Sci-Fi', 'Crime', 'Thriller', 'Fantasy'];
  const languages = ['All', 'English', 'Hindi'];

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || movie.genre.includes(selectedGenre);
    const matchesLanguage = selectedLanguage === 'All' || movie.language.includes(selectedLanguage);
    
    return matchesSearch && matchesGenre && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Book Your Movie Tickets
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Discover and book tickets for the latest movies
            </p>
            
            {/* Search and Filters */}
            <div className="bg-red-900 rounded-lg p-6 shadow-2xl max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:border-black"
                  />
                </div>
                
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:border-black text-black bg-white"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
                
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:border-black text-black bg-white"
                >
                  {languages.map(language => (
                    <option key={language} value={language}>{language}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movies Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Movies in Theaters</h2>
          <div className="flex items-center space-x-2 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>{new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        {filteredMovies.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No movies found matching your criteria</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;