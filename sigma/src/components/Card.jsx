
import React, { useState } from 'react';

const Card = ({ title, description, imageUrl, price }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    alert("Item was added to the cart.");
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg transition-transform transform m-10 hover:scale-105">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-900 font-semibold">${price}</span>
          <button
            onClick={handleAddToCart}
            className={`bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded ${isAddedToCart ? "cursor-not-allowed" : ""}`}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
