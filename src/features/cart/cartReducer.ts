import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../products/types/Product";
import { CartItem } from "../cart/types/CartItem";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<CartItem>) {
            const product = action.payload;
            const productInCart = state.findIndex((p) => p._id.toString() === product._id.toString());
            if (productInCart >= 0) {
                state[productInCart].quantity += product.quantity;
            } else {
                state.push(product);
            }
        },
        removeProductFromCart(state, action: PayloadAction<string>) {
            const productId = action.payload;
            const productInCart = state.findIndex((p) => p._id.toString() === productId);
            if (productInCart) {
                state.splice(productInCart, 1);
            }
        },
        updateProductQuantity(state, action: PayloadAction<{ productId: string, quantity: number }>) {
            const { productId, quantity } = action.payload;
            const productInCart = state.findIndex((p) => p._id.toString() === productId);
            if (productInCart) {
                state[productInCart].quantity = quantity;
            }
        }
    }
});

const cartReducer = cartSlice.reducer;
export const { addProductToCart, removeProductFromCart, updateProductQuantity } = cartSlice.actions;
export default cartReducer;
