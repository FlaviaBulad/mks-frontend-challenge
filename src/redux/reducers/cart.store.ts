import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const productIndex = state.items.findIndex(
        (item: { id: number }) => item.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.items[productIndex].amount += 1;
      } else {
        state.items.push({
          ...action.payload,
          amount: 1,
        });
      }
    },
    removeProductFromCart(state, action) {
      const productIndex = state.items.findIndex(
        (item: { id: number }) => item.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.items[productIndex].amount -= 1;
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
