import { Box, Stepper, Step, StepLabel, Button } from "@mui/material"
import { Formik } from "formik";
import { useState } from "react";

import Shipping from "../components/Shipping";
import { CheckoutInitialValues } from "../types/CheckoutInitialValues";
import { CheckoutSchema } from "../schema/CheckoutSchema";
import CustomerContactInfo from "../components/CustomerContactInfo";
import PaymentPage from "../../payment/page/PaymentPage";
import Checkout from "../components/Checkout";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import { makePayment } from "../../payment/paymentReducer";

const initialValues: CheckoutInitialValues = {
        billingAddress: {
            firstName: "",
            lastName: "",
            street1: "",
            street2: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
            shippingPrice: 10,
        },
        shippingAddress: {
            isSameAddress: true,
            address: {
                firstName: "",
                lastName: "",
                street1: "",
                street2: "",
                city: "",
                state: "",
                zipCode: "",
                country: "",
                shippingPrice: 10,
            }
        },
        email: "",
        phoneNumber: "",
        paymentMethod: "",
        bankName: "",
        accountNumber: "",
    }

const CheckoutPage = () => {
    const dispatch = useAppDispatch();
    const [activeStep, setActiveStep] = useState(0);
    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;
    const isThirdStep = activeStep === 2;
    const isLastStep = activeStep === 3;

    const handleFormSubmit = (values: CheckoutInitialValues, actions: any) => {
        // copies the values from billing address to shipping address
        if (isSecondStep && values.shippingAddress.isSameAddress) {
            actions.setFieldValue("shippingAddress.address",{
                ...values.billingAddress,
                isSameAddress: true,
            });
        }
        actions.setTouched({});
    }
  return (
    <Box width="80%" m="100px auto">
        <Stepper activeStep={activeStep} sx={{ m: "20px 0"}}>
            <Step>
                <StepLabel>Checkout</StepLabel>
            </Step>
            <Step>
                <StepLabel>Billing</StepLabel>
            </Step>
            <Step>
                <StepLabel>Contact Details</StepLabel>
            </Step>
            <Step>
                <StepLabel>Payment</StepLabel>
            </Step>
        </Stepper>
        <Box>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={CheckoutSchema[activeStep]}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    isValid,
                }) => (
                    <form onSubmit={handleSubmit}>
                        {isFirstStep && (
                            <Checkout />
                        )}
                        {isSecondStep && (
                            <Shipping
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                setFieldValue={setFieldValue}
                            />
                        )}
                        {isThirdStep && (
                            <CustomerContactInfo
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                setFieldValue={setFieldValue}
                            />
                        )}
                        {isLastStep && (
                            <PaymentPage
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                setFieldValue={setFieldValue}
                            />
                        )}
                        <Box display="flex" justifyContent="space-between" gap="50px">
                            {!isFirstStep && (
                                <Button
                                    fullWidth
                                    color="primary"
                                    variant="contained"
                                    sx={{
                                        boxShadow: "none",
                                        color: "white",
                                        borderRadius: 0,
                                        padding: "15px 40px"
                                    }}
                                    onClick={() => setActiveStep(activeStep - 1)}
                                >Back</Button>
                            )}
                            <Button
                                fullWidth
                                type="submit"
                                color="primary"
                                variant="contained"
                                sx={{
                                    boxShadow: "none",
                                    color: "white",
                                    borderRadius: 0,
                                    padding: "15px 40px"
                                }}
                                onClick={() => {
                                    if (isValid && activeStep < 3 ) setActiveStep(activeStep + 1);
                                    else if (isValid && activeStep === 3) {
                                        dispatch(makePayment({
                                            method: "bank_transfer",
                                            bankName: values.bankName,
                                            accountNumber: values.accountNumber,
                                            ordersId: [""],
                                            userId: "6554ca84bf8a024cf7803db3",
                                            shipmentInfo: values.billingAddress,
                                        }))
                                        setActiveStep(0);
                                    }}
                                }
                            >{!isLastStep ? "Next": "Place Order"}</Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    </Box>
  )
}

export default CheckoutPage