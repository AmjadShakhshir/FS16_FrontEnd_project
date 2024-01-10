import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItemsToCheckout } from "./types/CartItemsToCheckout";
import { url } from "../../common/common";
import axios from "axios";

export const initialState: {
    cart: CartItemsToCheckout[],
    checkoutStatus: "idle" | "loading" | "failed" | "succeeded",
} = {
    cart: [],
    checkoutStatus: "idle",
};

export const makeCheckout = createAsyncThunk<CartItemsToCheckout[], CartItemsToCheckout, { rejectValue: string }>(
    'makeCheckout',
    async (CartItemsToCheckout, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${url}/payment`, CartItemsToCheckout);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
});

export const checkoutReducer = createSlice({
    name: 'checkout',
    initialState,
    reducers: {}
});