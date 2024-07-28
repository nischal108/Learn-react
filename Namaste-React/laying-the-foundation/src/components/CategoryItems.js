import { IMAGES_FOODS_URL } from "../../utils/constants";

function CategoryItems({ items }) {
  if (!items || !Array.isArray(items)) {
    return <div>Invalid items data</div>;
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 px-4 flex items-center justify-between border rounded-lg shadow-md gap-x-10"
        >
          <div className="info w-2/3 ">
            <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
            <h5 className="text-sm text-gray-700 mb-2">${(item.card.info.price / 100).toFixed(2)}</h5>
            <p className="description text-sm text-gray-500">{item.card.info.description}</p>
          </div>
          <div className="image w-1/3">
            <img
              src={`${IMAGES_FOODS_URL}${item.card.info.imageId}`}
              alt={item.card.info.name}
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryItems;
