// src/components/Body.js
import React from 'react';

const Body = () => {
  return (
    <div className="w-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-gray-600">
        This is a simple and elegant website built with React and Tailwind CSS.
        Explore our content and discover what we have to offer.
      </p>
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Body;
