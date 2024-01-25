import { Address } from "../../checkout/types/CheckoutInitialValues";

export type PaymentDetails = {
    userId: string;
    method: "bank_transfer" | "credit_card";
    bankName: string;
    accountNumber: string;
    shipmentInfo: Address;
    amount: number;
};