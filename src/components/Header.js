import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-bold mb-2 md:mb-0">
          <Link to="/">CampEasy</Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/riverday" className="hover:underline">River Day Packages</Link>
          <Link to="/camping" className="underline">Camping Packages</Link>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Cart</a>
          <button className="ml-4 bg-green-500 text-white rounded-full px-4 py-1 font-semibold hover:bg-green-600 transition">
            BOOK HERE
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;