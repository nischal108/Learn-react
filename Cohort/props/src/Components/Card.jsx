import React from 'react';

function Card({ image, index, currentIndex }) {
  const leftPosition = (index - currentIndex) * 100;
  return (
    <div className='w-60 h-40 rounded-md overflow-hidden absolute top-0' style={{ left: `${leftPosition}%` }}>
      <img className='w-full h-full object-cover object-center' src={image} alt="" />
    </div>
  );
}

export default Card;
