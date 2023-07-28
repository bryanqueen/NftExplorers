// Hero.js

import React from 'react';


const Hero = () => {
  return (
    <div
      className="relative py-32 bg-gradient-to-r from-blue-500 to-indigo-500"
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-8">
         
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Discover the World of NFTs
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10">
          Collect, Trade, and Explore Unique NFT Collections
        </p>
        <a
            href='/explore'
          className="bg-white text-blue-500 hover:bg-blue-200 hover:text-white px-8 py-2.5 rounded-lg font-bold text-lg shadow-lg transition duration-300"
        >
          Explore
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center text-white mt-16 mb-10">
        <p className="text-lg">Built with love ❤❤ by</p>
        <a
          href="https:///"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-200 font-bold hover:text-blue-100"
        >
          Daniel
        </a>
      </div>
    </div>
  );
};

export default Hero;
