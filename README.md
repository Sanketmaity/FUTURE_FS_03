# 🎬 BookMyShow Clone

A modern, full-featured movie ticket booking application built with React, TypeScript, and Tailwind CSS. This clone replicates the core functionality of BookMyShow with a beautiful, responsive design and seamless user experience.

![BookMyShow Clone](https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

### 🎭 Core Functionality
- **Movie Browsing** - Browse latest movies with detailed information
- **Advanced Search & Filters** - Search by title, filter by genre and language
- **Movie Details** - Comprehensive movie information with cast, crew, and ratings
- **Theater Selection** - Choose from multiple cinema chains with facilities info
- **Interactive Seat Selection** - Visual seat map with different seat types and pricing
- **Show Timing Selection** - Multiple show times across different dates
- **Booking Confirmation** - Complete booking flow with ticket generation

### 🔐 Authentication & Security
- **Clerk Authentication** - Secure sign-in/sign-up with social providers
- **Protected Routes** - Booking flow requires authentication
- **User Profiles** - Personal dashboard with booking history
- **Session Management** - Persistent login state

### 🎨 Design & UX
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark Theme** - Modern dark UI with red accents matching BookMyShow
- **Smooth Animations** - Hover effects and micro-interactions
- **Loading States** - Professional loading indicators
- **Accessibility** - WCAG compliant design

### 🛠️ Technical Features
- **TypeScript** - Full type safety and better developer experience
- **Context API** - Global state management for booking flow
- **React Router** - Client-side routing with protected routes
- **Date Handling** - Advanced date selection with date-fns
- **Component Architecture** - Modular, reusable components

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Clerk account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bookmyshow-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your Clerk publishable key to `.env.local`:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Clerk Authentication Setup

1. **Create Clerk Account**
   - Visit [Clerk Dashboard](https://dashboard.clerk.com)
   - Create a new application
   - Choose your preferred authentication methods

2. **Get API Keys**
   - Copy your Publishable Key from the Clerk dashboard
   - Add it to your `.env.local` file

3. **Configure Authentication**
   - Customize sign-in/sign-up appearance
   - Set up social providers (Google, Facebook, etc.)
   - Configure user profile fields

## 📱 Usage

### For Users

1. **Browse Movies**
   - View latest movies on the homepage
   - Use search and filters to find specific movies
   - Click on any movie to view detailed information

2. **Book Tickets**
   - Sign in to your account (required for booking)
   - Select a movie and click "Book Tickets"
   - Choose your preferred theater and show time
   - Select seats from the interactive seat map
   - Complete the booking and receive confirmation

3. **Manage Bookings**
   - View booking history in your profile
   - Download or share tickets
   - Access account settings

### For Developers

1. **Adding New Movies**
   ```typescript
   // src/data/movies.ts
   export const movies: Movie[] = [
     {
       id: 'unique-id',
       title: 'Movie Title',
       poster: 'https://image-url.jpg',
       rating: 8.5,
       duration: '2h 30m',
       genre: ['Action', 'Adventure'],
       language: ['English', 'Hindi'],
       description: 'Movie description...',
       releaseDate: '2024-01-15',
       cast: ['Actor 1', 'Actor 2'],
       director: 'Director Name'
     }
   ];
   ```

2. **Adding New Theaters**
   ```typescript
   // src/data/theaters.ts
   export const theaters: Theater[] = [
     {
       id: 'theater-id',
       name: 'Theater Name',
       location: 'Location',
       distance: '2.5 km',
       facilities: ['Parking', 'Food Court'],
       shows: [
         {
           id: 'show-id',
           time: '7:00 PM',
           price: 250,
           availability: 'available'
         }
       ]
     }
   ];
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with auth
│   ├── Footer.tsx      # Site footer
│   ├── MovieCard.tsx   # Movie display card
│   └── ProtectedRoute.tsx # Route protection wrapper
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with movie grid
│   ├── MovieDetails.tsx # Individual movie page
│   ├── TheaterSelection.tsx # Theater and show selection
│   ├── SeatSelection.tsx # Interactive seat booking
│   ├── BookingConfirmation.tsx # Booking success page
│   └── Profile.tsx     # User profile and history
├── context/            # Global state management
│   └── BookingContext.tsx # Booking flow state
├── data/              # Static data and types
│   ├── movies.ts      # Movie database
│   └── theaters.ts    # Theater database
└── styles/            # Global styles
    └── index.css      # Tailwind CSS imports
```

## 🎨 Design System

### Color Palette
- **Primary**: Red (#DC2626) - BookMyShow signature color
- **Background**: Dark Gray (#111827)
- **Cards**: Medium Gray (#1F2937)
- **Text**: White (#FFFFFF) and Light Gray (#D1D5DB)
- **Accents**: Green (#10B981), Blue (#3B82F6), Yellow (#F59E0B)

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible contrast
- **Interactive**: Hover states and focus indicators

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Consistent sizing, clear states
- **Forms**: Clean inputs with validation
- **Navigation**: Sticky header, breadcrumbs

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📦 Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🚀 Deployment

### Vercel
1. Import your repository to Vercel
2. Configure build settings (auto-detected)
3. Add environment variables in project settings


## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **BookMyShow** - Original design inspiration
- **Clerk** - Authentication service
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Pexels** - High-quality stock images

## 📞 Support

If you have any questions or need help:

- 📧 Email: support@bookmyshow-clone.com
- 💬 Discord: [Join our community](https://discord.gg/bookmyshow-clone)
- 🐛 Issues: [GitHub Issues](https://github.com/your-repo/issues)
- 📖 Docs: [Documentation](https://docs.bookmyshow-clone.com)

## 🔮 Roadmap

### Upcoming Features
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Admin dashboard
- [ ] Movie reviews and ratings
- [ ] Loyalty program
- [ ] Multi-language support
- [ ] Dark/Light theme toggle

### Technical Improvements
- [ ] Performance optimization
- [ ] SEO enhancements
- [ ] Progressive Web App (PWA)
- [ ] Offline support
- [ ] Advanced caching
- [ ] Analytics integration

---

**Made with ❤️ by the BookMyShow Clone Team**

*Star ⭐ this repository if you found it helpful!*
