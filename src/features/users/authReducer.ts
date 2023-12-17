import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersReducerState } from "./types/UsersReducersState";
import { AddUserRequest, User } from "./types/User";
import axios from "axios";
import { url } from "../../common/common";

export const initialState: UsersReducerState = {
    currentUser: undefined,
    status: 'idle',
    error: ''
};

export const signup = createAsyncThunk<User, AddUserRequest, { rejectValue: string }>(
    'signup',
    async (user, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${url}/users/signup`, user);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk<User, {email: string, password: string}, { rejectValue: string }>(
    'login',
    async (user, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${url}/users/login`, user);
            return response.data;
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            try {
                localStorage.removeItem('access_token');
                state.currentUser = undefined;
            } catch (error) {
                console.log(error);
            }
        }
    },
    extraReducers: builder => {
        builder
        .addCase(signup.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.currentUser = action.payload;
        })
        .addCase(signup.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(login.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.currentUser = action.payload;
        }).addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    }
});

const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
export default authReducer;