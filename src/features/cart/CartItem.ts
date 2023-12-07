import { Product } from "../products/types/Product";

export interface CartItem extends Product {
    quantity: number;
}