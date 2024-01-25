export type Address = {
    firstName: string;
    lastName: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    shippingPrice: number;
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
    paymentMethod: string;
    bankName: string;
    accountNumber: string;
};