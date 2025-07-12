import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, CreditCard } from 'lucide-react';
import { format } from 'date-fns';
import { useBooking } from '../context/BookingContext';
import { Seat } from '../context/BookingContext';

function SeatSelection() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { state, setSelectedSeats } = useBooking();
  const [selectedSeatIds, setSelectedSeatIds] = useState<string[]>([]);

  // Generate seat layout
  const generateSeats = (): Seat[] => {
    const seats: Seat[] = [];
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const seatsPerRow = 12;

    rows.forEach((row, rowIndex) => {
      for (let seatNum = 1; seatNum <= seatsPerRow; seatNum++) {
        let type: 'premium' | 'executive' | 'normal' = 'normal';
        let price = state.selectedShow?.price || 250;

        if (rowIndex < 3) {
          type = 'premium';
          price = price + 100;
        } else if (rowIndex < 6) {
          type = 'executive';
          price = price + 50;
        }

        // Randomly make some seats booked
        const isBooked = Math.random() < 0.2;
        const isSelected = selectedSeatIds.includes(`${row}${seatNum}`);

        seats.push({
          id: `${row}${seatNum}`,
          row,
          number: seatNum,
          type,
          status: isBooked ? 'booked' : isSelected ? 'selected' : 'available',
          price,
        });
      }
    });

    return seats;
  };

  const [seats] = useState<Seat[]>(generateSeats());

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'booked') return;

    const seatId = seat.id;
    let newSelectedIds: string[];

    if (selectedSeatIds.includes(seatId)) {
      newSelectedIds = selectedSeatIds.filter(id => id !== seatId);
    } else {
      if (selectedSeatIds.length >= 10) {
        alert('You can select maximum 10 seats');
        return;
      }
      newSelectedIds = [...selectedSeatIds, seatId];
    }

    setSelectedSeatIds(newSelectedIds);

    // Update selected seats in context
    const selectedSeats = seats
      .filter(s => newSelectedIds.includes(s.id))
      .map(s => ({ ...s, status: 'selected' as const }));
    
    setSelectedSeats(selectedSeats);
  };

  const getSeatColor = (seat: Seat) => {
    if (seat.status === 'booked') {
      return 'bg-red-600 cursor-not-allowed';
    }
    if (selectedSeatIds.includes(seat.id)) {
      return 'bg-green-500 hover:bg-green-600';
    }
    
    switch (seat.type) {
      case 'premium':
        return 'bg-purple-600 hover:bg-purple-700 cursor-pointer';
      case 'executive':
        return 'bg-blue-600 hover:bg-blue-700 cursor-pointer';
      default:
        return 'bg-gray-600 hover:bg-gray-700 cursor-pointer';
    }
  };

  const totalAmount = seats
    .filter(seat => selectedSeatIds.includes(seat.id))
    .reduce((sum, seat) => sum + seat.price, 0);

  const handleProceedToPayment = () => {
    if (selectedSeatIds.length === 0) {
      alert('Please select at least one seat');
      return;
    }
    navigate('/booking-confirmation');
  };

  const groupedSeats = seats.reduce((acc, seat) => {
    if (!acc[seat.row]) {
      acc[seat.row] = [];
    }
    acc[seat.row].push(seat);
    return acc;
  }, {} as Record<string, Seat[]>);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Select Your Seats</h1>
          
          {/* Booking Summary */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <h3 className="text-white font-semibold">{state.selectedMovie?.title}</h3>
                <p className="text-gray-400 text-sm">{state.selectedMovie?.duration}</p>
              </div>
              <div>
                <div className="flex items-center justify-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{format(state.selectedDate, 'EEE, MMM dd')}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center text-gray-300">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{state.selectedShow?.time}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{state.selectedTheater?.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Seat Map */}
          <div className="lg:col-span-3">
            {/* Screen */}
            <div className="mb-8">
              <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-8 rounded-t-full mx-auto w-3/4 flex items-center justify-center">
                <span className="text-white text-sm font-medium">SCREEN</span>
              </div>
              <div className="text-center text-gray-400 text-sm mt-2">All eyes this way please!</div>
            </div>

            {/* Seat Legend */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  <span className="text-gray-300">Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-gray-300">Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-600 rounded"></div>
                  <span className="text-gray-300">Booked</span>
                </div>
              </div>
            </div>

            {/* Seats */}
            <div className="space-y-2">
              {Object.entries(groupedSeats).map(([row, rowSeats]) => (
                <div key={row} className="flex items-center justify-center space-x-2">
                  <div className="w-8 text-center text-gray-400 font-medium">{row}</div>
                  <div className="flex space-x-1">
                    {rowSeats.slice(0, 4).map((seat) => (
                      <button
                        key={seat.id}
                        onClick={() => handleSeatClick(seat)}
                        className={`w-8 h-8 rounded text-xs font-medium text-white transition-all duration-200 ${getSeatColor(seat)}`}
                        disabled={seat.status === 'booked'}
                      >
                        {seat.number}
                      </button>
                    ))}
                  </div>
                  <div className="w-8"></div> {/* Aisle */}
                  <div className="flex space-x-1">
                    {rowSeats.slice(4, 8).map((seat) => (
                      <button
                        key={seat.id}
                        onClick={() => handleSeatClick(seat)}
                        className={`w-8 h-8 rounded text-xs font-medium text-white transition-all duration-200 ${getSeatColor(seat)}`}
                        disabled={seat.status === 'booked'}
                      >
                        {seat.number}
                      </button>
                    ))}
                  </div>
                  <div className="w-8"></div> {/* Aisle */}
                  <div className="flex space-x-1">
                    {rowSeats.slice(8, 12).map((seat) => (
                      <button
                        key={seat.id}
                        onClick={() => handleSeatClick(seat)}
                        className={`w-8 h-8 rounded text-xs font-medium text-white transition-all duration-200 ${getSeatColor(seat)}`}
                        disabled={seat.status === 'booked'}
                      >
                        {seat.number}
                      </button>
                    ))}
                  </div>
                  <div className="w-8 text-center text-gray-400 font-medium">{row}</div>
                </div>
              ))}
            </div>

            {/* Seat Types */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-purple-600">
                <h3 className="text-purple-400 font-semibold mb-2">Premium (A-C)</h3>
                <p className="text-gray-300 text-sm">₹{(state.selectedShow?.price || 250) + 100}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-blue-600">
                <h3 className="text-blue-400 font-semibold mb-2">Executive (D-F)</h3>
                <p className="text-gray-300 text-sm">₹{(state.selectedShow?.price || 250) + 50}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <h3 className="text-gray-400 font-semibold mb-2">Normal (G-J)</h3>
                <p className="text-gray-300 text-sm">₹{state.selectedShow?.price || 250}</p>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-4">Booking Summary</h3>
              
              {selectedSeatIds.length > 0 ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Selected Seats:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSeatIds.map(seatId => (
                        <span key={seatId} className="px-2 py-1 bg-green-600 text-white text-sm rounded">
                          {seatId}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between text-gray-300 mb-2">
                      <span>Tickets ({selectedSeatIds.length})</span>
                      <span>₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between text-gray-300 mb-2">
                      <span>Convenience Fee</span>
                      <span>₹{Math.round(totalAmount * 0.05)}</span>
                    </div>
                    <div className="border-t border-gray-700 pt-2">
                      <div className="flex justify-between text-white font-bold text-lg">
                        <span>Total Amount</span>
                        <span>₹{totalAmount + Math.round(totalAmount * 0.05)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleProceedToPayment}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Payment
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-400 py-8">
                  <p>Select seats to see pricing</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;