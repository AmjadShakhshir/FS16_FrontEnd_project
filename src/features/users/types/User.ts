import { ObjectId } from "mongodb";

export interface User {
    _id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    avatar?: string;
    logInWithGoogle?: boolean;
};

export type AddUserRequest = Omit<User, '_id'>;

export interface UpdateUserDto {
    name: string;
    email: string;
    password: string;
};

export type UpdateUserRequest = {
    _id: string,
    update: UpdateUserDto,
};