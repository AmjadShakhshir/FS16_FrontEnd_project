import { Product } from "../../products/types/Product";

export interface Order {
    _id: string;
    userId: string;
    paymentId: string;
    paymentStatus: string;
    products: Product[];
    totalPrice: number;
}

export interface AddOrderRequest {
    userId: string;
    products: Product[];
    paymentId: string;
    paymentStatus: string;
}

export interface UpdateOrderDTO {
    userId: string;
    products: Product[];
    paymentId: string;
    paymentStatus: string;
}

export interface UpdateOrderRequest {
    _id: string;
    update: UpdateOrderDTO;
}