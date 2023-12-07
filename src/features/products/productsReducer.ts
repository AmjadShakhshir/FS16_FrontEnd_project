import { PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

import { AddProductRequest, Product } from './types/Product';
import { GetAllQueries } from './types/GetAllQueries';
import { url } from '../../common/common';

export const initialState: {
    products: Product[];
    error: string | undefined;
    loading: boolean;
} = {
    products: [],
    loading: false,
    error: ''
};

export interface ProductState {
    products: [],
    status: "idle" | "loading" | "failed",
};

export const getAllProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
    'getAllProducts',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${url}/products`)
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const getOneProduct = createAsyncThunk<Product, string, { rejectValue: string }>(
    'getOneProduct',
    async (_id: string, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${url}/products/${_id}`);
            const product = response.data;
            return product;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const addProduct = createAsyncThunk<Product, AddProductRequest, { rejectValue: string}>(
    'addProduct',
    async (product: AddProductRequest, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/products`, product);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortProducts: (state, action: PayloadAction<"asc" | "desc">) => {
            const sortType = action.payload;
            if (sortType === 'asc') {
                state.products.sort((a, b) => a.price - b.price);
            } else if (sortType === 'desc') {
                state.products.sort((a, b) => b.price - a.price);
            }
        },
        setUpState: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        cleanUpState: (state) => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(getAllProducts.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getOneProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
        })
        .addCase(getOneProduct.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(getOneProduct.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
        })
        .addCase(addProduct.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(addProduct.pending, (state, action) => {
            state.loading = true;
        })
    },
});

const productsReducer = productsSlice.reducer;
export const { sortProducts, setUpState, cleanUpState } = productsSlice.actions;
export default productsReducer;