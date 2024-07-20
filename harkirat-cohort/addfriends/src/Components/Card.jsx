import React from 'react';

const Card = ({ person, beFriend, index }) => {
  const { Name, profession, image, friend } = person;

  return (
    <div className='w-64 h-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='w-full h-40'>
        <img className='w-full h-full object-cover' src={image} alt={Name} />
      </div>
      <div className='p-4'>
        <h4 className='text-xl font-semibold mb-2'>{Name}</h4>
        <h5 className='text-sm text-gray-600'>{profession}</h5>
      </div>
      <div className='flex justify-center pb-4'>
        <button
          onClick={() => beFriend(index)}
          className={`px-4 py-2 ${friend ? "bg-red-500" : "bg-green-500"} text-white font-semibold rounded-full`}
        >
          {friend ? "Remove Friend" : "Add friend"}
        </button>
      </div>
    </div>
  );
};

export default Card;
