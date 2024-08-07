import React from 'react';

function Card({ song, index, addtoFavourite }) {
  const { image, Name, artist, favourite } = song;

  return (
    <div className='w-auto shadow-xl p-4'>
      <div className='flex items-center gap-3'>
        <div className="image-box w-28 h-18 rounded-md overflow-hidden">
          <img className='w-full h-full object-cover object-center' src={image} alt="" />
        </div>
        <div className="info-box">
          <h3 className='font-bold text-lg'>{Name}</h3>
          <p className='text-sm'>{artist}</p>
        </div>
      </div>
      <div className="button-container flex justify-center">
        <button className={`px-3 mt-3 py-1 ${favourite ? "bg-red-500" : "bg-orange-500"} rounded-full text-white font-bold shadow-lg`} onClick={()=>addtoFavourite(index)} >
          {favourite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default Card;
