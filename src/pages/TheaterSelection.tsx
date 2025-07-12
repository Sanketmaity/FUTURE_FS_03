import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Wifi, Car, Accessibility } from 'lucide-react';
import { format, addDays, isSameDay } from 'date-fns';
import { theaters } from '../data/theaters';
import { useBooking } from '../context/BookingContext';

function TheaterSelection() {
  const { id } = useParams<{ id: string }>();
  const { state, setSelectedTheater, setSelectedShow, setSelectedDate } = useBooking();
  const [selectedDate, setLocalSelectedDate] = useState(new Date());

  const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  const handleDateSelect = (date: Date) => {
    setLocalSelectedDate(date);
    setSelectedDate(date);
  };

  const handleShowSelect = (theater: any, show: any) => {
    setSelectedTheater(theater);
    setSelectedShow(show);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'border-green-500 text-green-400';
      case 'filling-fast':
        return 'border-yellow-500 text-yellow-400';
      case 'sold-out':
        return 'border-red-500 text-red-400 opacity-50 cursor-not-allowed';
      default:
        return 'border-gray-500 text-gray-400';
    }
  };

  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'food court':
        return <Users className="w-4 h-4" />;
      case 'wheelchair accessible':
        return <Accessibility className="w-4 h-4" />;
      case 'premium seats':
        return <Users className="w-4 h-4" />;
      default:
        return <Wifi className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {state.selectedMovie?.title} - Select Theater & Show Time
          </h1>
          <p className="text-gray-400">Choose your preferred theater and show timing</p>
        </div>

        {/* Date Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Select Date
          </h2>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {dates.map((date) => (
              <button
                key={date.toISOString()}
                onClick={() => handleDateSelect(date)}
                className={`flex-shrink-0 px-4 py-3 rounded-lg border-2 transition-all duration-200 min-w-[100px] text-center ${
                  isSameDay(date, selectedDate)
                    ? 'border-red-500 bg-red-600 text-white'
                    : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500'
                }`}
              >
                <div className="font-medium">{format(date, 'EEE')}</div>
                <div className="text-sm">{format(date, 'MMM dd')}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Theaters List */}
        <div className="space-y-6">
          {theaters.map((theater) => (
            <div key={theater.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6">
                {/* Theater Info */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold text-white mb-2">{theater.name}</h3>
                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{theater.location} • {theater.distance}</span>
                    </div>
                    
                    {/* Facilities */}
                    <div className="flex flex-wrap gap-2">
                      {theater.facilities.map((facility) => (
                        <div
                          key={facility}
                          className="flex items-center space-x-1 px-2 py-1 bg-gray-700 rounded-md text-gray-300 text-sm"
                        >
                          {getFacilityIcon(facility)}
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-green-400 text-sm font-medium">Available Today</div>
                    <div className="text-gray-400 text-sm">Booking opens at 9 AM</div>
                  </div>
                </div>

                {/* Show Times */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Show Times
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {theater.shows.map((show) => (
                      <Link
                        key={show.id}
                        to={show.availability !== 'sold-out' ? `/movie/${id}/seats` : '#'}
                        onClick={() => show.availability !== 'sold-out' && handleShowSelect(theater, show)}
                        className={`block p-3 rounded-lg border-2 transition-all duration-200 hover:transform hover:scale-105 ${getAvailabilityColor(show.availability)} ${
                          show.availability === 'sold-out' ? '' : 'hover:bg-gray-700'
                        }`}
                      >
                        <div className="text-center">
                          <div className="font-bold text-lg">{show.time}</div>
                          <div className="text-sm">₹{show.price}</div>
                          <div className="text-xs mt-1 capitalize">
                            {show.availability === 'filling-fast' ? 'Filling Fast' : show.availability}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-900 bg-opacity-50 border border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-200 mb-2">Booking Information</h3>
          <ul className="text-blue-100 text-sm space-y-1">
            <li>• Tickets can be canceled up to 2 hours before the show</li>
            <li>• Please arrive 30 minutes before the show time</li>
            <li>• Outside food and beverages are not allowed</li>
            <li>• Mobile tickets are accepted at all theaters</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TheaterSelection;