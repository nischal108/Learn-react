import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem, updateQuantity } from "../../utils/cartSlice"; // Ensure you have an updateQuantity action
import { IMAGES_FOODS_URL } from "../../utils/constants";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ itemId, quantity }));
    }
  };

  const handleClearCart = () =>{
    dispatch(clearCart());
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.card.info.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.card.info.id}
                  className="flex items-center justify-between p-4 border rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`${IMAGES_FOODS_URL}${item.card.info.imageId}`}
                      alt={item.card.info.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.card.info.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        रु {(item.card.info.price / 100).toFixed(2)}
                      </p>
                      <div className="flex items-center mt-2">
                        <button
                          className="px-2 py-1 bg-gray-200 rounded-lg"
                          onClick={() =>
                            handleQuantityChange(
                              item.card.info.id,
                              item.quantity - 1
                            )
                          }
                        >
                          -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 rounded-lg"
                          onClick={() =>
                            handleQuantityChange(
                              item.card.info.id,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveItem(item.card.info.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <button className="text-white py-2 w-28 bg-red-500 rounded-lg hover:bg-red-600 float-end m-5"
              onClick={handleClearCart}
              >
                clear Cart
              </button>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/3 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>रु {(totalPrice / 100).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>रु {(totalPrice / 100).toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
