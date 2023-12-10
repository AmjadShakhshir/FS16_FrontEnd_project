import { PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

import { AddProductRequest, Product, UpdateProductRequest } from './types/Product';
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

export const getAllProducts = createAsyncThunk<Product[], GetAllQueries, { rejectValue: string }>(
    'getAllProducts',
    async (options: GetAllQueries, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${url}/products?page=${options.page}&limit=${options.limit}`)
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

export const updateProduct = createAsyncThunk<Product, UpdateProductRequest, { rejectValue: string }>(
    'updateProduct',
    async (input: UpdateProductRequest, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${url}/products/${input._id}`, input.update);
            const updatedProduct = response.data;
            return updatedProduct;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const deleteProduct = createAsyncThunk<string, string, { rejectValue: string }>(
    'deleteProduct',
    async (_id: string, { rejectWithValue }) => {
        try {
            await axios.delete<boolean>(`${url}/products/${_id}`);
            return _id;
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
        .addCase(updateProduct.fulfilled, (state, action) => {
            const updatedProduct = action.payload;
            const index = state.products.findIndex(product => product._id === updatedProduct._id);
            state.products[index] = updatedProduct;
        })
        .addCase(updateProduct.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(updateProduct.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            const _id = action.payload;
            const index = state.products.findIndex(product => product._id.toString() === _id);
            state.products.splice(index, 1);
        })
        .addCase(deleteProduct.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(deleteProduct.pending, (state, action) => {
            state.loading = true;
        })
    },
});

const productsReducer = productsSlice.reducer;
export const { sortProducts, setUpState, cleanUpState } = productsSlice.actions;
export default productsReducer;