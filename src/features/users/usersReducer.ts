import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddUserRequest, UpdateUserRequest, User } from "./types/User";
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

export const getUserById = createAsyncThunk<User, string, { rejectValue: string }>(
    'getUserById',
    async (_id, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${url}/users/${_id}`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const updateUser = createAsyncThunk<User, UpdateUserRequest, { rejectValue: string }>(
    'updateUser',
    async (user, {rejectWithValue}) => {
        try {
            const response = await axios.put(`${url}/users/${user._id}`, user);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const deleteUser = createAsyncThunk<User, string, { rejectValue: string }>(
    'deleteUser',
    async (_id, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`${url}/users/${_id}`);
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
        .addCase(getUserById.pending, (state) => {
            state.loading = true;
        })
        .addCase(getUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.users = [action.payload];
        })
        .addCase(getUserById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.map(user => user._id === action.payload._id ? action.payload : user);
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.filter(user => user._id !== action.payload._id);
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

const usersReducer = usersSlice.reducer;
export default usersReducer;