import { ObjectId } from 'mongodb';
export interface Product {
    _id: ObjectId;
    name: string;
    price: number;
    description: string;
    images: string[];
    stock: number;
}

export type AddProductRequest = Omit<Product, '_id'>;