import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { url } from "../../common/common";
import { AddOrderRequest, Order, UpdateOrderRequest } from "./types/Order";

export const initialState: {
    orders: Order[];
    error: string | undefined;
    loading: boolean;
} = {
    orders: [],
    loading: false,
    error: ''
};

export const getAllOrders = createAsyncThunk<Order[], void, { rejectValue: string }>(
    'getAllOrders',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${url}/orders`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const getOrderById = createAsyncThunk<Order, string, { rejectValue: string }>(
    'getOrderById',
    async (_id, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${url}/orders/${_id}`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const createOrder = createAsyncThunk<Order, AddOrderRequest, { rejectValue: string }>(
    'createOrder',
    async (order, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${url}/orders`, order);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const updateOrder = createAsyncThunk<Order, UpdateOrderRequest, { rejectValue: string }>(
    'updateOrder',
    async (order, {rejectWithValue}) => {
        try {
            const response = await axios.put(`${url}/orders/${order._id}`, order);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const deleteOrder = createAsyncThunk<Order, string, { rejectValue: string }>(
    'deleteOrder',
    async (_id, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`${url}/orders/${_id}`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllOrders.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
            state.loading = false;
        })
        .addCase(getAllOrders.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(getOrderById.pending, (state) => {
            state.loading = true;
        })
        .addCase(getOrderById.fulfilled, (state, action) => {
            state.orders = [action.payload];
            state.loading = false;
        })
        .addCase(getOrderById.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(updateOrder.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateOrder.fulfilled, (state, action) => {
            state.orders = state.orders.map(order => order._id === action.payload._id ? action.payload : order);
            state.loading = false;
        })
        .addCase(updateOrder.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(deleteOrder.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteOrder.fulfilled, (state, action) => {
            state.orders = state.orders.filter(order => order._id !== action.payload._id);
            state.loading = false;
        })
        .addCase(deleteOrder.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
});

const ordersReducer = ordersSlice.reducer;
export default ordersReducer;