import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ShoppingCart";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Reducer
    
  },
});
