import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {IMAGES_FOODS_URL} from "../../utils/constants"

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6510461&lng=77.2202992&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        const initialData = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResData(initialData);
        setFilteredRestaurants(initialData);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

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
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
          placeholder="Search for restaurants..."
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="btns">
        <button className="btn" onClick={handleFilterByRating}>
          Filter High Rated
        </button>
      </div>
      <div className="res-cards">
        {loading ? (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link  key={restaurant.info.id}
             to={"/restaurant/"+restaurant.info.id}>
              <ResCard
              name={restaurant.info.name}
              type={restaurant.info.locality}
              rating={restaurant.info.avgRating}
              image={IMAGES_FOODS_URL + restaurant.info.cloudinaryImageId}
            />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
