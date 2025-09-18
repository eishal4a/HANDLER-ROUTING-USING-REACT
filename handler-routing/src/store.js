import { configureStore } from "@reduxjs/toolkit";
import cartReducer from 'cardSlice'; // ✅ import cartReducer from CartSlice.jsx

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
