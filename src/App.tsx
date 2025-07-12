import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import TheaterSelection from './pages/TheaterSelection';
import SeatSelection from './pages/SeatSelection';
import BookingConfirmation from './pages/BookingConfirmation';
import Profile from './pages/Profile';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route 
              path="/movie/:id/theaters" 
              element={
                <ProtectedRoute>
                  <TheaterSelection />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/movie/:id/seats" 
              element={
                <ProtectedRoute>
                  <SeatSelection />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/booking-confirmation" 
              element={
                <ProtectedRoute>
                  <BookingConfirmation />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;