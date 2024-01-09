import { Box, Stepper, Step, StepLabel } from "@mui/material"
import { Formik } from "formik";
import { useState } from "react";

import useAppSelector from "../../common/hooks/useAppSelector";
import Shipping from "./components/Shipping";
import { InitialValues } from "./types/InitialValues";
import { CheckoutSchema } from "./schema/CheckoutSchema";

const Checkout = () => {
    const cart = useAppSelector(state => state.cartReducer);
    const [activeStep, setActiveStep] = useState(0);
    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;

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

    const handleSubmit = (values: any) => {
        console.log(values);
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
                onSubmit={handleSubmit}
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
                            <div>Payment</div>
                        )}
                    </form>
                )}
            </Formik>
        </Box>
    </Box>
  )
}

export default Checkout