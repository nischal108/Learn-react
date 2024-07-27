import { useState, useEffect } from 'react';

const useResFood = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6510461&lng=77.2202992&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        const initialData =
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setResData(initialData);
        console.log(initialData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };

    fetchData();
  }, []);

  return resData;
};

export default useResFood;
