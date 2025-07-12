import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Smartphone,
  CreditCard,
  Shield,
  Award,
  Users
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-red-600 text-white px-3 py-1 rounded-md font-bold text-xl">
                BookMyShow
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's largest entertainment ticketing platform. Book tickets for movies, 
              events, plays, sports and activities across the country.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Movies
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Plays
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sports
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Activities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Buzz
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Customer Care
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+91 80 6701 3333</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">support@bookmyshow.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Bigtree Entertainment Pvt. Ltd.<br />
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Smartphone className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="text-white font-medium text-sm mb-1">Mobile App</h4>
              <p className="text-gray-400 text-xs">Book on the go</p>
            </div>
            <div className="text-center">
              <CreditCard className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="text-white font-medium text-sm mb-1">Secure Payments</h4>
              <p className="text-gray-400 text-xs">100% safe & secure</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="text-white font-medium text-sm mb-1">Data Protection</h4>
              <p className="text-gray-400 text-xs">Your data is safe</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="text-white font-medium text-sm mb-1">Best Experience</h4>
              <p className="text-gray-400 text-xs">Award winning service</p>
            </div>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="border-t border-gray-800 bg-gray-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-4">Download BookMyShow App</h3>
            <p className="text-gray-400 text-sm mb-6">
              Get access to exclusive deals, faster booking, and personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-black font-bold text-xs">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-black font-bold text-xs">▶️</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} BookMyShow. All rights reserved. | Made with ❤️ in India
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Press
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Investor Relations
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;