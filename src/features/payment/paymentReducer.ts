import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { url } from "../../common/common";
import { PaymentDetails } from "./type/PaymentDetails";

const initialState:{
    payment: PaymentDetails,
    error: string,
    loading: boolean,

} = {
    payment: {
        userId: '',
        method: "bank_transfer",
        bankName: "",
        accountNumber: "",
        shipmentInfo: {
            firstName: "",
            lastName: "",
            street1: "",
            street2: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
            shippingPrice: 10,
        },
        amount: 0,
    },
    error: '',
    loading: false,
};

export const makePayment = createAsyncThunk<PaymentDetails, PaymentDetails, { rejectValue: string }>(
    'makePayment',
    async (paymentDetails: PaymentDetails, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${url}/payments`, paymentDetails, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(makePayment.pending, (state) => {
                state.loading = true;
            })
            .addCase(makePayment.fulfilled, (state, action) => {
                state.payment = action.payload;
                state.loading = false;
            })
            .addCase(makePayment.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            });
    },
});

const paymentReducer = paymentSlice.reducer;
export default paymentReducer;