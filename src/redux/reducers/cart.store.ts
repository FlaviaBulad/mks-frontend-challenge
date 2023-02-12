import { createSlice } from "@reduxjs/toolkit";
import { ICartProduct } from "@/interfaces/products/IProduct";

const initialState: ICartProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, context) {
      const productIndex = state.find(
        (product) => product.id === context.payload.id
      );
      if (productIndex) {
        productIndex.amount += 1;
      } else {
        state.push({ ...context.payload, amount: 1 });
      }
    },
    removeProductFromCart(state, context) {
      const productIndex = state.findIndex(
        (product) => product.id === context.payload.id
      );
      if (productIndex >= 0) {
        if (state[productIndex].amount > 1) {
          state[productIndex].amount -= 1;
        } else {
          state.splice(productIndex, 1);
        }
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
