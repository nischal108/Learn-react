import { useParams } from "react-router-dom";
import ResInfoShimmer from "./ResInfoShimmer";
import useRestaurantProfile from "../../utils/useRestaurantProfile";
import OffLinePage from "./OffLinePage";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantProfile = () => {
  const { id } = useParams();
  const { restaurant, isOnline, categoryUnder199 } = useRestaurantProfile(id);

  if (!restaurant && isOnline) {
    return <ResInfoShimmer />;
  }
  if (!restaurant && !isOnline) {
    return <OffLinePage />;
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{restaurant.name}</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold mr-2">
            {restaurant.avgRating} ({restaurant.totalRatingsString})
          </span>
          <span className="text-gray-600">• {restaurant.costForTwoMessage}</span>
        </div>
        <div className="text-gray-600 mb-2">
          {restaurant.cuisines.join(", ")}
        </div>
        <div className="flex items-center text-gray-600">
          <span>{restaurant.areaName}</span>
        </div>
        <div className="mt-2 text-gray-600">
          <span>60-65 mins</span>
        </div>
      </div>
      {/* categories Items at 199 */}
      {categoryUnder199.map((categoryItem, index) => (
          <RestaurantCategory key={index} data={categoryItem} />
      ))}


    </div>
  );
};

export default RestaurantProfile;