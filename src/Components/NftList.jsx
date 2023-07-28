// NFTList.js

import React from 'react';
import { nftData } from '../data'; // Import the dummy data

const NFTList = () => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Popular NFT Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nftData.map((nft) => (
          <div
            key={nft.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={nft.image}
              alt={nft.name}
              className="h-32 w-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">{nft.name}</h3>
            <p className="text-gray-600">{nft.description}</p>
            <div className="mt-4">
              <a
                href={nft.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                View Collection
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center py-6">
          <a
            href='https://opensea.io'
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            View More
          </a>
        </div>
    </div>
  );
};

export default NFTList;
