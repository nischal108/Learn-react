import React, { useEffect, useState } from "react";
import { RESTURANT_PROFILE_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import ResInfoShimmer from "./ResInfoShimmer";

const RestaurantProfile = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${RESTURANT_PROFILE_URL}/${id}`);
        const resData = await data.json();
        console.log(resData.data);
        const finalResData = resData.data.cards[2].card.card.info;
        setRestaurant(finalResData);
        console.log(finalResData);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!restaurant) {
    return <ResInfoShimmer />;
  }

  return (
    <div className="restaurant-profile">
      <h2>{restaurant.name}</h2>
      <div className="restaurant-info">
        <p>
          <strong>Rating:</strong> {restaurant.avgRating} stars (
          {restaurant.totalRatingsString})
        </p>
        <p>
          <strong>Cost for Two:</strong> {restaurant.costForTwoMessage}
        </p>
        <p>
          <strong>Address:</strong> {restaurant.locality}, {restaurant.areaName}
          , {restaurant.city}
        </p>
        <p>
          <strong>Is Open:</strong> {restaurant.isOpen ? "Yes" : "No"}
        </p>
          <p>
            <strong>Discount:</strong>{" "}
            {restaurant.aggregatedDiscountInfo.header}
          </p>
      </div>
      <div className="menu-preview">
        <h3>Popular Menu Items</h3>
        <ul>
          {restaurant.cuisines ? (
            restaurant.cuisines.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <p>No popular items listed.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantProfile;
