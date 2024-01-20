import { Address } from "../../checkout/types/InitialValues";

export type PaymentDetails = {
    userId: string;
    method: "credit_card" | "bank_transfer" | "paypal";
    ordersId: string[];
    bankName: string;
    accountNumber: string;
    shipmentInfo: Address;
};