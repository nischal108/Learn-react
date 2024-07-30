import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      // Set default quantity to 1 if not already set
      if (item.quantity == null) {
        item.quantity = 1;
      }
      state.items.push(item);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.card.info.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find(item => item.card.info.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    }
  },
});

export const { addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
