import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGES_FOODS_URL } from "../../utils/constants";
import { addItem, updateQuantity } from "../../utils/cartSlice";

function CategoryItems({ items }) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.items);

  if (!items || !Array.isArray(items)) {
    return <div>Invalid items data</div>;
  }

  const handleAddItem = (item) => {
    const cartItem = cart.find(cartItem => cartItem.card.info.id === item.card.info.id);
    if (cartItem) {
      dispatch(updateQuantity({ itemId: item.card.info.id, quantity: cartItem.quantity + 1 }));
    } else {
      dispatch(addItem(item));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-2 px-4 flex items-center justify-between border rounded-lg shadow-md gap-x-10"
        >
          <div className="info w-2/3">
            <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
            <h5 className="text-sm text-gray-700 mb-2">
              रु {(item.card.info.price / 100).toFixed(2)}
            </h5>
            <p className="description text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="image relative w-1/3">
            <button
              className="absolute bottom-0 left-0 px-4 py-1 bg-green-500 cursor-pointer rounded-bl-md text-white hover:bg-green-600"
              onClick={() => handleAddItem(item)}
            >
              Add to Cart
            </button>
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
