import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddUserRequest, User } from "./types/User";
import axios from "axios";
import { url } from "../../common/common";
import { UserCredentials } from "./types/UserCredentials";
import { UsersReducerState } from "./types/UsersReducersState";
import CurrentUser from "./types/CurrentUser";

const initialState: UsersReducerState = {
    accessToken: '',
    currentUser: undefined,
    isValid: false,
    error: '',
    status: 'idle'
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

export const login = createAsyncThunk<CurrentUser, UserCredentials, { rejectValue: string }>(
    'login',
    async (credentials, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${url}/users/login`, credentials);
            const loggedInUser = response.data;
            const accessToken = loggedInUser.accessToken;
            localStorage.setItem('accessToken', accessToken);
            const user = loggedInUser;
            return user;
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
            localStorage.removeItem('accessToken');
            state.currentUser = undefined;
        },
        reset: (state) => initialState
    },
    extraReducers: builder => {
        builder
        .addCase(signup.pending, (state) => {
            return {
                ...state,
                status: 'loading'
            }
        })
        .addCase(signup.fulfilled, (state, action) => {
            return {
                ...state,
                status: 'succeeded',
                currentUser: action.payload
            }
        })
        .addCase(signup.rejected, (state, action) => {
            return {
                ...state,
                status: 'failed',
                error: action.payload as string
            }
        })
        .addCase(login.pending, (state) => {
            return {
                ...state,
                status: 'loading'
            }
        })
        .addCase(login.fulfilled, (state, action) => {
                return {
                    ...state,
                    status: 'succeeded',
                    currentUser: action.payload
                }
        })
        .addCase(login.rejected, (state, action) => {
            return {
                ...state,
                status: 'failed',
                error: action.payload as string
            }
        })
    }
});

const authReducer = authSlice.reducer;
export const { logout, reset } = authSlice.actions;
export default authReducer;