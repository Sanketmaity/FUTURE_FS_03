import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
  duration: string;
  genre: string[];
  language: string[];
  description: string;
  releaseDate: string;
  cast: string[];
  director: string;
}

interface Theater {
  id: string;
  name: string;
  location: string;
  distance: string;
  facilities: string[];
  shows: Show[];
}

interface Show {
  id: string;
  time: string;
  price: number;
  availability: 'filling-fast' | 'available' | 'sold-out';
}

interface Seat {
  id: string;
  row: string;
  number: number;
  type: 'premium' | 'executive' | 'normal';
  status: 'available' | 'booked' | 'selected';
  price: number;
}

interface BookingState {
  selectedMovie: Movie | null;
  selectedTheater: Theater | null;
  selectedShow: Show | null;
  selectedSeats: Seat[];
  selectedDate: Date;
  totalAmount: number;
}

interface BookingContextType {
  state: BookingState;
  setSelectedMovie: (movie: Movie) => void;
  setSelectedTheater: (theater: Theater) => void;
  setSelectedShow: (show: Show) => void;
  setSelectedSeats: (seats: Seat[]) => void;
  setSelectedDate: (date: Date) => void;
  clearBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const initialState: BookingState = {
  selectedMovie: null,
  selectedTheater: null,
  selectedShow: null,
  selectedSeats: [],
  selectedDate: new Date(),
  totalAmount: 0,
};

type BookingAction =
  | { type: 'SET_MOVIE'; payload: Movie }
  | { type: 'SET_THEATER'; payload: Theater }
  | { type: 'SET_SHOW'; payload: Show }
  | { type: 'SET_SEATS'; payload: Seat[] }
  | { type: 'SET_DATE'; payload: Date }
  | { type: 'CLEAR_BOOKING' };

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_MOVIE':
      return { ...state, selectedMovie: action.payload };
    case 'SET_THEATER':
      return { ...state, selectedTheater: action.payload };
    case 'SET_SHOW':
      return { ...state, selectedShow: action.payload };
    case 'SET_SEATS':
      const totalAmount = action.payload.reduce((sum, seat) => sum + seat.price, 0);
      return { ...state, selectedSeats: action.payload, totalAmount };
    case 'SET_DATE':
      return { ...state, selectedDate: action.payload };
    case 'CLEAR_BOOKING':
      return initialState;
    default:
      return state;
  }
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const setSelectedMovie = (movie: Movie) => {
    dispatch({ type: 'SET_MOVIE', payload: movie });
  };

  const setSelectedTheater = (theater: Theater) => {
    dispatch({ type: 'SET_THEATER', payload: theater });
  };

  const setSelectedShow = (show: Show) => {
    dispatch({ type: 'SET_SHOW', payload: show });
  };

  const setSelectedSeats = (seats: Seat[]) => {
    dispatch({ type: 'SET_SEATS', payload: seats });
  };

  const setSelectedDate = (date: Date) => {
    dispatch({ type: 'SET_DATE', payload: date });
  };

  const clearBooking = () => {
    dispatch({ type: 'CLEAR_BOOKING' });
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        setSelectedMovie,
        setSelectedTheater,
        setSelectedShow,
        setSelectedSeats,
        setSelectedDate,
        clearBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

export type { Movie, Theater, Show, Seat };