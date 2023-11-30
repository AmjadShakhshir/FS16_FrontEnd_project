import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const CartItem: CartItem = { ...action.payload, quantity: 1 };
      const foundIndex = state.findIndex((item) => item.id === action.payload.id);
      if (foundIndex !== -1) {
        state[foundIndex].quantity++;
      } else {
        state.push(CartItem);
      }
    },
    removeItem: (state,action: PayloadAction<number>) => {
      const productId = action.payload;
      const foundIndex = state.findIndex((item) => item.id === productId);
      if (foundIndex !== -1) {
        state.splice(foundIndex,1);
      }
    },
    resetCart: (state) => {
      return initialState;
    },
  },
});

const cartReducer = cartSlice.reducer;
// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartReducer;
