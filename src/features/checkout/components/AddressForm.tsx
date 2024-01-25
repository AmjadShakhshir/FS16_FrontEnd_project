import { Box, TextField, useMediaQuery } from '@mui/material'
import React from 'react'
import { CheckoutInitialValues } from '../types/CheckoutInitialValues';
import { getIn } from 'formik';

const AddressForm = ({ type, errors, touched, values, handleChange, handleBlur, setFieldValue}: {
    type: string,
    errors: any,
    touched: any,
    values: CheckoutInitialValues["billingAddress"] | CheckoutInitialValues["shippingAddress"]["address"],
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleBlur: React.FocusEventHandler<HTMLInputElement>,
    setFieldValue: any
}) => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const formattedName = (field: string) => `${type}.${field}`;

    const formattedError = (field: string) =>
        Boolean(
            getIn(touched, formattedName(field)) &&
            getIn(errors, formattedName(field))
        );

    const formattedHelperText = (field: string) =>
        getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field));
    
    return (
        <Box
            display="grid"
            gap="15px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
            }}
        >
            <TextField
                fullWidth
                label="First Name"
                type="text"
                name={formattedName("firstName")}
                error={formattedError("firstName")}
                helperText={formattedHelperText("firstName")}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField
                fullWidth
                label="Last Name"
                type="text"
                name={formattedName("lastName")}
                error={formattedError("lastName")}
                helperText={formattedHelperText("lastName")}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField
                fullWidth
                label="Country"
                type="text"
                name={formattedName("country")}
                error={formattedError("country")}
                helperText={formattedHelperText("country")}
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "span 4" }}
            />

            <TextField
                fullWidth
                label="Street Address"
                type="text"
                name={formattedName("street1")}
                error={formattedError("street1")}
                helperText={formattedHelperText("street1")}
                value={values.street1}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField
                fullWidth
                label="Street Address 2 (optional)"
                type="text"
                name={formattedName("street2")}
                error={formattedError("street2")}
                helperText={formattedHelperText("street2")}
                value={values.street2}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField
                fullWidth
                label="City"
                type="text"
                name={formattedName("city")}
                error={formattedError("city")}
                helperText={formattedHelperText("city")}
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField
                fullWidth
                label="State"
                type="text"
                name={formattedName("state")}
                error={formattedError("state")}
                helperText={formattedHelperText("state")}
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "1fr" }}
            />

            <TextField
                fullWidth
                label="Zip Code"
                type="text"
                name={formattedName("zipCode")}
                error={formattedError("zipCode")}
                helperText={formattedHelperText("zipCode")}
                value={values.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "1fr" }}
            />
        </Box>
    )
}

export default AddressForm