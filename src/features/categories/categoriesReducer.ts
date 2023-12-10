import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "./types/Category";
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
            const response = await fetch(`${url}/categories`);
            const categories = await response.json();
            return categories;
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
    }
});

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;