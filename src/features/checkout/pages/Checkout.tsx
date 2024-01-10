import { Box, Stepper, Step, StepLabel, Button } from "@mui/material"
import { Formik } from "formik";
import { useState } from "react";

import useAppSelector from "../../../common/hooks/useAppSelector";
import Shipping from "../components/Shipping";
import { InitialValues } from "../types/InitialValues";
import { CheckoutSchema } from "../schema/CheckoutSchema";
import Payment from "../components/Payment";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

const initialValues: InitialValues = {
        billingAddress: {
            firstName: "",
            lastName: "",
            street1: "",
            street2: "",
            city: "",
            state: "",
            zip: "",
            country: "",
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
                zip: "",
                country: "",
            }
        },
        email: "",
        phoneNumber: "",
    }

const Checkout = () => {
    const cart = useAppSelector(state => state.cartReducer);
    const [activeStep, setActiveStep] = useState(0);
    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;

    const handleFormSubmit = (values: InitialValues, actions: any) => {
        // copies the values from billing address to shipping address
        if (isFirstStep && values.shippingAddress.isSameAddress) {
            actions.setFieldValue("shippingAddress.address",{
                ...values.billingAddress,
                isSameAddress: true,
            });
        }

        if (isSecondStep) {
            console.log(values);
        }

        actions.setTouched({});
        
    }
  return (
    <Box width="80%" m="100px auto">
        <Stepper activeStep={activeStep} sx={{ m: "20px 0"}}>
            <Step>
                <StepLabel>Billing</StepLabel>
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
                    setFieldValue
                }) => (
                    <form onSubmit={handleSubmit}>
                        {isFirstStep && (
                            <Shipping
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                setFieldValue={setFieldValue}
                            />
                        )}
                        {isSecondStep && (
                            <Payment
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
                                    if (activeStep < 1 ) setActiveStep(activeStep + 1)
                                    }
                                }
                            >{!isSecondStep ? "Next": "Place Order"}</Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    </Box>
  )
}

export default Checkout