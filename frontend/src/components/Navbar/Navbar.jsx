import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          Trendy Now
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#services" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>

        {/* Call to Action Button */}
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
