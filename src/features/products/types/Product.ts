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

export interface UpdateProductDto {
    title: string;
    price: number;
    description: string;
    categoryId: number;
}
export interface UpdateProductRequest {
    _id: ObjectId;
    update: UpdateProductDto;
}