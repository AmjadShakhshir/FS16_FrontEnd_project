export type Address = {
    firstName: string;
    lastName: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
};

export type ShippingAddress = {
    isSameAddress: boolean;
    address: Address;
};

export type CheckoutInitialValues = {
    billingAddress: Address;
    shippingAddress: ShippingAddress;
    email: string;
    phoneNumber: string;
};