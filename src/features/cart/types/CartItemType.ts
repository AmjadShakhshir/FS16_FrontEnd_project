import { Product } from "../../products/types/Product";

export interface CartItemType extends Product {
    quantity: number;
}