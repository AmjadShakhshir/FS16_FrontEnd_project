import { ObjectId } from "mongodb";

export type User = {
    _id: ObjectId,
    name: string,
    email: string,
    password: string,
    roleId: ObjectId,
    logInWithGoogle: boolean,
    token: string,
};

export type AddUserRequest = Omit<User, '_id'>;

export type UpdateUserDto = {
    name: string,
    email: string,
    password: string,
    roleId: ObjectId,
    logInWithGoogle: boolean,
    token: string,
};

export type UpdateUserRequest = {
    _id: string,
    update: UpdateUserDto,
};