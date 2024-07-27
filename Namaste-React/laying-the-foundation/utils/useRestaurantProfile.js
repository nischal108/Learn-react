import React, { useEffect, useState } from "react";
import { RESTURANT_PROFILE_URL } from "./constants";
import useOnlineStatus from "./useOnlineStatus";

const useRestaurantProfile = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [categoryUnder199, setCategoryUnder199] = useState(null);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const fetchData = async () => {
      if (isOnline) {
        try {
          const response = await fetch(`${RESTURANT_PROFILE_URL}/${id}`);
          const data = await response.json();
          const finalResData = data?.data.cards[2].card.card.info;
          const categoryData = data?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
          const finalcatData = categoryData.filter((catobject)=>(catobject.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

          setRestaurant(finalResData);
          setCategoryUnder199(finalcatData);
          console.log(finalcatData);
        } catch (error) {
          console.error("Error fetching restaurant data:", error);
        }
      }
    };

    fetchData();
  }, [id, isOnline]);

  return { restaurant, isOnline, categoryUnder199 };
};

export default useRestaurantProfile;
