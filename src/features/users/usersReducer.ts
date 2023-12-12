import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "./types/User";
import axios from "axios";
import { url } from "../../common/common";

export const initialState: {
    users: User[];
    error: string | undefined;
    loading: boolean;
} = {
    users: [],
    loading: false,
    error: ''
};

export const getAllUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
    'getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${url}/users`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

const usersReducer = usersSlice.reducer;
export default usersReducer;