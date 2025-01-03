import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("carts")) || [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, price } = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, quantity, price });
      }

      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);

      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity;
        } else {
          state.items = state.items.filter((item) => item.productId !== productId);
        }

        localStorage.setItem("carts", JSON.stringify(state.items));
      }
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
    clear(state) {
      state.items = []; // Clears all cart items
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
