import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../products/types/Product";
import { CartItem } from "./CartItem";
import { ObjectId } from "mongodb";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<Product>) {
            const cartItem: CartItem = { ...action.payload, quantity: 1 };
            const productInCart = state.findIndex((p) => p._id === action.payload._id);
            if (productInCart !== -1) {
                state[productInCart].quantity++;
            } else {
                state.push(cartItem);
            }
        },
        removeProductFromCart(state, action: PayloadAction<ObjectId>) {
            const productId = action.payload;
            const productInCart = state.findIndex((p) => p._id === productId);
            if (productInCart) {
                state.splice(productInCart, 1);
            }
        },
        updateProductQuantity(state, action: PayloadAction<{ productId: ObjectId, quantity: number }>) {
            const { productId, quantity } = action.payload;
            const productInCart = state.findIndex((p) => p._id === productId);
            if (productInCart) {
                state[productInCart].quantity = quantity;
            }
        }
    }
});

const cartReducer = cartSlice.reducer;
export const { addProductToCart, removeProductFromCart, updateProductQuantity } = cartSlice.actions;
export default cartReducer;
