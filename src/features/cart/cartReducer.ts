import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "./types/CartItemType";

const initialState: CartItemType[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<CartItemType>) {
            const product = action.payload;
            const productInCart = state.findIndex((p) => p._id.toString() === product._id.toString());
            if (productInCart >= 0) {
                state[productInCart].quantity = product.quantity;
            } else {
                state.push(product);
            }
        },
        removeProductFromCart(state, action: PayloadAction<string>) {
            const productId = action.payload;
            const productInCart = state.findIndex((p) => p._id.toString() === productId);
            if (productInCart !== -1) {
                state.splice(productInCart, 1);
            }
        },
        resetCart(state) {
            state.splice(0, state.length);
        }
    }
});

const cartReducer = cartSlice.reducer;
export const { addProductToCart, removeProductFromCart, resetCart } = cartSlice.actions;
export default cartReducer;
