import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Download, Share2, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';
import { useBooking } from '../context/BookingContext';

function BookingConfirmation() {
  const navigate = useNavigate();
  const { state, clearBooking } = useBooking();

  useEffect(() => {
    // If no booking data, redirect to home
    if (!state.selectedMovie || !state.selectedSeats.length) {
      navigate('/');
    }
  }, [state, navigate]);

  if (!state.selectedMovie || !state.selectedSeats.length) {
    return null;
  }

  const bookingId = `BMS${Date.now().toString().slice(-8)}`;
  const convenienceFee = Math.round(state.totalAmount * 0.05);
  const finalAmount = state.totalAmount + convenienceFee;

  const handleDownloadTicket = () => {
    // In a real app, this would generate and download a PDF ticket
    alert('Ticket download feature would be implemented here');
  };

  const handleShareTicket = () => {
    // In a real app, this would open share dialog
    if (navigator.share) {
      navigator.share({
        title: `Movie Ticket - ${state.selectedMovie.title}`,
        text: `I'm watching ${state.selectedMovie.title} at ${state.selectedTheater?.name}`,
        url: window.location.href,
      });
    } else {
      alert('Share feature would be implemented here');
    }
  };

  const handleNewBooking = () => {
    clearBooking();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h1>
          <p className="text-gray-400">Your movie tickets have been booked successfully</p>
        </div>

        {/* Ticket Card */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
          {/* Ticket Header */}
          <div className="bg-red-600 p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-1">{state.selectedMovie.title}</h2>
                <p className="text-red-100">{state.selectedMovie.duration} • {state.selectedMovie.genre.join(', ')}</p>
              </div>
              <div className="text-right">
                <div className="text-red-100 text-sm">Booking ID</div>
                <div className="font-bold text-lg">{bookingId}</div>
              </div>
            </div>
          </div>

          {/* Ticket Body */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Show Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3">Show Details</h3>
                
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-medium">{format(state.selectedDate, 'EEEE, MMMM dd, yyyy')}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-medium">{state.selectedShow?.time}</div>
                    <div className="text-sm text-gray-400">Please arrive 30 minutes early</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                  <div>
                    <div className="font-medium">{state.selectedTheater?.name}</div>
                    <div className="text-sm text-gray-400">{state.selectedTheater?.location}</div>
                  </div>
                </div>
              </div>

              {/* Seat Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3">Seat Details</h3>
                
                <div className="flex items-start text-gray-300">
                  <Users className="w-5 h-5 mr-3 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium mb-2">
                      {state.selectedSeats.length} {state.selectedSeats.length === 1 ? 'Ticket' : 'Tickets'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {state.selectedSeats.map(seat => (
                        <span
                          key={seat.id}
                          className="px-3 py-1 bg-gray-700 text-white text-sm rounded-md border"
                        >
                          {seat.id} ({seat.type})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Tickets ({state.selectedSeats.length} × avg ₹{Math.round(state.totalAmount / state.selectedSeats.length)})</span>
                  <span>₹{state.totalAmount}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Convenience Fee</span>
                  <span>₹{convenienceFee}</span>
                </div>
                <div className="border-t border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total Paid</span>
                    <span>₹{finalAmount}</span>
                  </div>
                </div>
                <div className="text-center text-green-400 text-sm mt-2">
                  ✓ Payment completed via UPI
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Footer */}
          <div className="bg-gray-750 px-6 py-4 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleDownloadTicket}
                className="flex items-center justify-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Ticket
              </button>
              <button
                onClick={handleShareTicket}
                className="flex items-center justify-center px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Ticket
              </button>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-8 bg-yellow-900 bg-opacity-50 border border-yellow-800 rounded-lg p-6">
          <h3 className="text-yellow-200 font-semibold mb-3">Important Information</h3>
          <ul className="text-yellow-100 text-sm space-y-2">
            <li>• Please carry a valid photo ID for verification</li>
            <li>• Outside food and beverages are not allowed</li>
            <li>• Please arrive at least 30 minutes before show time</li>
            <li>• Tickets can be canceled up to 2 hours before the show</li>
            <li>• In case of any issues, contact customer support</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-x-4">
          <button
            onClick={handleNewBooking}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Book Another Movie
          </button>
          <Link
            to="/"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;