import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();
  return (
    <div className="max-h-screen py-8 bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-orange-600">Welcome, User {userid}!</h1>
        <p className="text-gray-700 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex justify-center items-center mt-6">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default User;
