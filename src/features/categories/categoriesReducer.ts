import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { AddCategoryRequest, Category, UpdateCategoryRequest } from "./types/Category";
import { url } from "../../common/common";

export const initialState: {
    categories: Category[];
    error: string | undefined;
    loading: boolean;
} = {
    categories: [],
    loading: false,
    error: ''
};

export const getAllCategories = createAsyncThunk<Category[], void, { rejectValue: string }>(
    'getAllCategories',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${url}/categories`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const addCategory = createAsyncThunk<Category, AddCategoryRequest, { rejectValue: string }>(
    'addCategory',
    async (category: AddCategoryRequest, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${url}/categories`, category);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const deleteCategory = createAsyncThunk<Category, string, { rejectValue: string }>(
    'deleteCategory',
    async (_id: string, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`${url}/categories/${_id}`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const updateCategory = createAsyncThunk<Category, UpdateCategoryRequest, { rejectValue: string }>(
    'updateCategory',
    async (category: UpdateCategoryRequest, {rejectWithValue}) => {
        try {
            const response = await axios.put(`${url}/categories/${category._id}`, category._id);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllCategories.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        })
        .addCase(getAllCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addCategory.pending, (state) => {
            state.loading = true;
        })
        .addCase(addCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.categories.push(action.payload);
        })
        .addCase(addCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteCategory.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = state.categories.filter((category) => category._id !== action.payload._id);
        })
        .addCase(deleteCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;