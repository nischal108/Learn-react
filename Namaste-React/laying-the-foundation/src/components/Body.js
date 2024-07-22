import ResCard from "./ResCard";
import { restaurantData as initialData } from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(initialData);

  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants..." />
      </div>
      <div className="btns">
        <button 
          className="btn" 
          onClick={() => setFilteredRestaurants(initialData.filter((restaurant) => restaurant.rating > 4.5))}
        >
          Filter by Rating
        </button>
      </div>
      <div className="res-cards">
        {filteredRestaurants.map((restaurant) => (
          <ResCard
            key={restaurant.id}
            name={restaurant.name}
            type={restaurant.type}
            rating={restaurant.rating}
            image={restaurant.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
