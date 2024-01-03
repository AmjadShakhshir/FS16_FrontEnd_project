import { User } from "./User";

export interface UsersReducerState {
    accessToken: string,
    currentUser?: User,
    isValid: boolean,
    error: string,
    status: 'idle' | 'loading' | 'failed' | 'succeeded'
}