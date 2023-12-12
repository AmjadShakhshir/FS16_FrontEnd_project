import { User } from "./types/User";

export const initialState:{
    users: User[],
    loading: boolean,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string,
} = {
    users: [],
    loading: false,
    status: 'idle',
    error: '',
};