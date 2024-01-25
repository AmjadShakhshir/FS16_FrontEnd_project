import { Address } from "../../checkout/types/CheckoutInitialValues";

export type PaymentDetails = {
    userId: string;
    ordersId: string[];
    method: "bank_transfer" | "paypal";
    bankName: string;
    accountNumber: string;
    shipmentInfo: Address;
};

export type PaymentIfno = {
    userId: string;
    method: "bank_transfer" | "paypal";
    bankName: string;
    accountNumber: string;
};