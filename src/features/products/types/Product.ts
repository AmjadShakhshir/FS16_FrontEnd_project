export interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    stock: number;
    categoryId: string;
}

export type AddProductRequest = Omit<Product, '_id'>;

export interface UpdateProductDto {
    name: string;
    price: number;
    description: string;
    images: string[];
    stock: number;
    categoryId: string;
}
export interface UpdateProductRequest {
    _id: string;
    update: UpdateProductDto;
}