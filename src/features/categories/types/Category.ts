import { ObjectId } from "mongodb";

export type Category = {
    name: string;
    images: string[];
    _id: ObjectId;
};