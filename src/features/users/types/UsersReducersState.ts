import { User } from "./User";

export interface UsersReducerState {
    currentUser?: User,
    error?: string,
    status: 'idle' | 'loading' | 'failed' | 'succeeded'
}