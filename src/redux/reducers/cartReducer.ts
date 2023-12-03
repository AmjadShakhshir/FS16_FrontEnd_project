import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import { CartItem } from "../../types/CartItem";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<Product>) {
            const cartItem: CartItem = { ...action.payload, quantity: 1 };
            const productInCart = state.findIndex((p) => p.id === action.payload.id);
            if (productInCart !== -1) {
                state[productInCart].quantity++;
            } else {
                state.push(cartItem);
            }
        },
        removeProductFromCart(state, action: PayloadAction<string>) {
            const productId = action.payload;
            const productInCart = state.findIndex((p) => p.id === productId);
            if (productInCart) {
                state.splice(productInCart, 1);
            }
        },
        updateProductQuantity(state, action: PayloadAction<{ productId: string, quantity: number }>) {
            const { productId, quantity } = action.payload;
            const productInCart = state.findIndex((p) => p.id === productId);
            if (productInCart) {
                state[productInCart].quantity = quantity;
            }
        }
    }
});

const cartReducer = cartSlice.reducer;
export const { addProductToCart, removeProductFromCart, updateProductQuantity } = cartSlice.actions;
export default cartReducer;
