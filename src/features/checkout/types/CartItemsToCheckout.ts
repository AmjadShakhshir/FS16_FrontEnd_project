export type ProductsInCheckout = {
    _id: string,
    name: string,
    price: number,
    quantity: number
}; 

export type CartItemsToCheckout = {
    userName: string,
    userEmail: string,
    products: ProductsInCheckout
};