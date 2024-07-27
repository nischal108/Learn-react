import React from "react";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="my-4 p-4 border rounded-md">
      <h3 className="text-lg font-semibold">{data.card.card.title}</h3>
      {/* Additional category information can be added here */}
    </div>
  );
};

export default RestaurantCategory;
