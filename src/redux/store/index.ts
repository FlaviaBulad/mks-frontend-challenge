import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../reducers/cart.store";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
