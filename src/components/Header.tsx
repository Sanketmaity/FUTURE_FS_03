import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, User, Menu, X } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-red-600 text-white px-3 py-1 rounded-xl font-bold text-xl">
              BookMyShow
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-xl text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
          </div>

          {/* Location and User */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-black hover:text-white transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Mumbai</span>
            </button>
            
            {/* Clerk Authentication */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="flex items-center space-x-1 text-black hover:text-black transition-colors">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Sign In</span>
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "bg-gray-800 border border-gray-700",
                    userButtonPopoverActionButton: "text-black hover:text-black hover:bg-white",
                    userButtonPopoverActionButtonText: "text-black",
                    userButtonPopoverFooter: "hidden"
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-300 ">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search movies, events..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md text-black placeholder-blach focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button className="flex items-center space-x-2 text-black hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Mumbai</span>
              </button>
              
              {/* Mobile Clerk Authentication */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="flex items-center space-x-2 text-black hover:text-white transition-colors">
                    <User className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center space-x-2">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                        userButtonPopoverCard: "bg-gray-800 border border-gray-700",
                        userButtonPopoverActionButton: "text-gray-300 hover:text-white hover:bg-gray-700",
                        userButtonPopoverActionButtonText: "text-gray-300",
                        userButtonPopoverFooter: "hidden"
                      }
                    }}
                  />
                  <span className="text-gray-300">Profile</span>
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </div>

      {/* Breadcrumb */}
      {location.pathname !== '/' && (
        <div className="bg-gray-750 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <nav className="text-sm">
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
              {location.pathname.includes('/movie/') && (
                <>
                  <span className="text-gray-500 mx-2">/</span>
                  <span className="text-white">Movies</span>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;