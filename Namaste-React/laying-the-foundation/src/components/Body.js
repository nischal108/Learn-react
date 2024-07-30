import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ResCard, { VegResCard } from './ResCard';
import Shimmer from './Shimmer';
import { IMAGES_FOODS_URL } from '../../utils/constants';
import useResFood from '../../utils/useResFood';
import UserContext from '../../utils/loggedUserContext';

const Body = () => {
  const [loading, setLoading] = useState(true);
  const resData = useResFood();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const VegResCards = VegResCard(ResCard);
  const [user] = useContext(UserContext);

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
      resData.filter((restaurant) => restaurant.info.avgRating >= 4.5)
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
      {user.isLoggedIn ? (
        <span className="text-gray-700">Hello, {user.username}!</span>
      ) : (
        <div className="text-gray-700">Welcome, Guest!</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </>
        ) : (
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
                  type={restaurant.info.locality || 'Unknown'}
                  rating={restaurant.info.avgRating || 'N/A'}
                  image={restaurant.info.cloudinaryImageId ? (IMAGES_FOODS_URL + restaurant.info.cloudinaryImageId) : 'placeholder_image_url'} // Replace with an actual placeholder image URL
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
