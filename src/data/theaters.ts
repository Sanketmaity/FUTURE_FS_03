import { Theater } from '../context/BookingContext';

export const theaters: Theater[] = [
  {
    id: '1',
    name: 'PVR Cinemas',
    location: 'Phoenix MarketCity',
    distance: '2.1 km',
    facilities: ['Parking', 'Food Court', 'Wheelchair Accessible'],
    shows: [
      { id: '1', time: '10:00 AM', price: 200, availability: 'available' },
      { id: '2', time: '1:30 PM', price: 250, availability: 'filling-fast' },
      { id: '3', time: '5:00 PM', price: 300, availability: 'available' },
      { id: '4', time: '8:30 PM', price: 350, availability: 'filling-fast' },
      { id: '5', time: '11:45 PM', price: 280, availability: 'available' }
    ]
  },
  {
    id: '2',
    name: 'INOX',
    location: 'City Center Mall',
    distance: '3.5 km',
    facilities: ['Parking', 'Food Court', 'Premium Seats'],
    shows: [
      { id: '6', time: '9:45 AM', price: 180, availability: 'available' },
      { id: '7', time: '1:15 PM', price: 220, availability: 'available' },
      { id: '8', time: '4:45 PM', price: 280, availability: 'filling-fast' },
      { id: '9', time: '8:15 PM', price: 320, availability: 'sold-out' },
      { id: '10', time: '11:30 PM', price: 250, availability: 'available' }
    ]
  },
  {
    id: '3',
    name: 'Cinepolis',
    location: 'Nexus Mall',
    distance: '1.8 km',
    facilities: ['Parking', 'Food Court', 'Wheelchair Accessible', 'Premium Seats'],
    shows: [
      { id: '11', time: '10:30 AM', price: 190, availability: 'available' },
      { id: '12', time: '2:00 PM', price: 240, availability: 'available' },
      { id: '13', time: '5:30 PM', price: 290, availability: 'filling-fast' },
      { id: '14', time: '9:00 PM', price: 340, availability: 'available' },
      { id: '15', time: '12:15 AM', price: 270, availability: 'available' }
    ]
  },
  {
    id: '4',
    name: 'Carnival Cinemas',
    location: 'Forum Mall',
    distance: '4.2 km',
    facilities: ['Parking', 'Food Court'],
    shows: [
      { id: '16', time: '11:00 AM', price: 170, availability: 'available' },
      { id: '17', time: '2:30 PM', price: 210, availability: 'filling-fast' },
      { id: '18', time: '6:00 PM', price: 270, availability: 'available' },
      { id: '19', time: '9:30 PM', price: 310, availability: 'available' }
    ]
  }
];