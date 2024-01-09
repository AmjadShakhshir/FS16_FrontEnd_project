import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React from 'react'
import AddressForm from './AddressForm'
import { InitialValues } from '../types/InitialValues'

const Shipping = ({ values, errors, touched, handleChange, handleBlur, setFieldValue }: {
    values: InitialValues,
    errors: any,
    touched: any,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleBlur: React.FocusEventHandler<HTMLInputElement>,
    setFieldValue: any
}) => {
  return (
    <Box>
        { /* Billing Form */}
        <Box>
            <Typography sx={{ mb: "15px" }} fontSize="1.2em">
                Billing Information
            </Typography>
            <AddressForm
                type="billingAddress"
                errors={errors}
                touched={touched}
                values={values.billingAddress}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
            />
        </Box>

        <Box mb="20px">
            <FormControlLabel
                label="Same for Shipping Address"
                control={
                    <Checkbox
                        defaultChecked
                        value={values.shippingAddress.isSameAddress}
                        onChange={() => 
                            setFieldValue(
                                'shippingAddress.isSameAddress',
                                !values.shippingAddress.isSameAddress)}
                    />
                }
            />
        </Box>

        { /* Shipping Form */}
        {!values.shippingAddress.isSameAddress && (
            <Box>
                <Typography sx={{ mb: "15px" }} fontSize="1.2em">
                    Shipping Information
                </Typography>
                <AddressForm
                    type="shippingAddress"
                    errors={errors}
                    touched={touched}
                    values={values.shippingAddress.address}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFieldValue={setFieldValue}
                />
            </Box>
        )}
    </Box>
    )
}

export default Shipping