import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Calendar, Clock, MapPin, Ticket, User, Mail, Phone } from 'lucide-react';

function Profile() {
  const { user } = useUser();

  // Mock booking history data
  const bookingHistory = [
    {
      id: 'BMS12345678',
      movie: 'Avengers: Endgame',
      theater: 'PVR Cinemas - Phoenix MarketCity',
      date: '2024-01-15',
      time: '8:30 PM',
      seats: ['H7', 'H8'],
      amount: 650,
      status: 'completed'
    },
    {
      id: 'BMS87654321',
      movie: 'The Dark Knight',
      theater: 'INOX - City Center Mall',
      date: '2024-01-10',
      time: '5:00 PM',
      seats: ['F5', 'F6', 'F7'],
      amount: 840,
      status: 'completed'
    },
    {
      id: 'BMS11223344',
      movie: 'Inception',
      theater: 'Cinepolis - Nexus Mall',
      date: '2024-01-20',
      time: '2:00 PM',
      seats: ['D4', 'D5'],
      amount: 580,
      status: 'upcoming'
    }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={user.imageUrl}
              alt={user.fullName || 'User'}
              className="w-24 h-24 rounded-full border-4 border-red-600"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-2">
                {user.fullName || 'User'}
              </h1>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{user.primaryEmailAddress?.emailAddress}</span>
                </div>
                {user.primaryPhoneNumber && (
                  <div className="flex items-center justify-center md:justify-start text-gray-300">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{user.primaryPhoneNumber.phoneNumber}</span>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Premium Member
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 text-center">
            <Ticket className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">12</div>
            <div className="text-gray-400">Total Bookings</div>
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-gray-400">This Month</div>
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 text-center">
            <User className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">₹8,450</div>
            <div className="text-gray-400">Total Spent</div>
          </div>
        </div>

        {/* Booking History */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white">Booking History</h2>
          </div>
          <div className="divide-y divide-gray-700">
            {bookingHistory.map((booking) => (
              <div key={booking.id} className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{booking.movie}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'completed' 
                          ? 'bg-green-900 text-green-300' 
                          : 'bg-blue-900 text-blue-300'
                      }`}>
                        {booking.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{booking.theater}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{new Date(booking.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{booking.time}</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex items-center space-x-4 text-sm">
                      <span className="text-gray-400">
                        Seats: <span className="text-white">{booking.seats.join(', ')}</span>
                      </span>
                      <span className="text-gray-400">
                        Booking ID: <span className="text-white">{booking.id}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">₹{booking.amount}</div>
                    <button className="mt-2 text-red-500 hover:text-red-400 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Settings */}
        <div className="mt-8 bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Account Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left transition-colors">
              <h3 className="font-semibold text-white mb-1">Notification Preferences</h3>
              <p className="text-gray-400 text-sm">Manage your email and SMS notifications</p>
            </button>
            <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left transition-colors">
              <h3 className="font-semibold text-white mb-1">Payment Methods</h3>
              <p className="text-gray-400 text-sm">Add or manage your payment options</p>
            </button>
            <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left transition-colors">
              <h3 className="font-semibold text-white mb-1">Privacy Settings</h3>
              <p className="text-gray-400 text-sm">Control your data and privacy preferences</p>
            </button>
            <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left transition-colors">
              <h3 className="font-semibold text-white mb-1">Help & Support</h3>
              <p className="text-gray-400 text-sm">Get help or contact customer support</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;