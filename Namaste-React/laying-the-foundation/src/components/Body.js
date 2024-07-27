import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResCard, {VegResCard} from './ResCard';
import Shimmer from './Shimmer';
import { IMAGES_FOODS_URL } from '../../utils/constants';
import useResFood from '../../utils/useResFood';

const Body = () => {
  const [loading, setLoading] = useState(true);
  const resData  = useResFood();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const VegResCards = VegResCard(ResCard);

  useEffect(() => {
    if (resData) {
      setFilteredRestaurants(resData);
      setLoading(false);
    }
  }, [resData]);

  const handleSearch = () => {
    setFilteredRestaurants(
      resData.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase())
      )
    );
  };

  const handleFilterByRating = () => {
    setFilteredRestaurants(
      resData.filter((restaurant) => restaurant.info.avgRating > 4.5)
    );
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        placeholder="Search for restaurants..."
        className="p-2 border border-gray-300 rounded-l focus:outline-none"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-r"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
    <div className="flex justify-center mb-4">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleFilterByRating}
      >
        Filter High Rated
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading ? (
        <>
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </>
      )  : (
        filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
             {restaurant.info.veg ? (
                <VegResCards data={restaurant.info} />
              ) : (
                <ResCard
                  name={restaurant.info.name}
                  type={restaurant.info.locality}
                  rating={restaurant.info.avgRating}
                  image={IMAGES_FOODS_URL + restaurant.info.cloudinaryImageId}
                />
              )}
          </Link>
        ))
      )}
    </div>
  </div>
);
};

export default Body;