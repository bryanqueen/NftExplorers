import React, { useState } from 'react';
import Logo from '../assets/Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={Logo} // Replace with the path to your logo image
            alt="Logo"
            className="h-10 w-auto"
          />
          <div className="text-white font-bold text-xl">
            NFT Explorer
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <nav className="space-x-4">
            <a
              href="/"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Home
            </a>
            <a
              href="/explore"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Explore
            </a>
            
            {/* Add more navigation links as needed */}
          </nav>
        </div>
        <div className="md:hidden">
          <button
            className="text-white hover:text-blue-200 transition duration-300 focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-2 px-4">
          <a
            href="/"
            className="block text-white py-2 hover:text-blue-200 transition duration-300"
          >
            Home
          </a>
          <a
            href="/explore"
            className="block text-white py-2 hover:text-blue-200 transition duration-300"
          >
            Explore
          </a>
          
          {/* Add more navigation links as needed */}
        </nav>
      )}
    </header>
  );
};

export default Header;
