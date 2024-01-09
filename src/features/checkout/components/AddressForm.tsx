import { Box, TextField, useMediaQuery } from '@mui/material'
import React from 'react'
import { InitialValues } from '../types/InitialValues';

const AddressForm = ({ type, values, handleChange, handleBlur, setFieldValue}: {
    type: string,
    values: InitialValues["billingAddress"] | InitialValues["shippingAddress"]["address"],
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleBlur: React.FocusEventHandler<HTMLInputElement>,
    setFieldValue: any
}) => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const formattedName = (field: string) => `${type}.${field}`;

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
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "1fr" }}
            />

            <TextField
                fullWidth
                label="Zip"
                type="text"
                name={formattedName("zip")}
                value={values.zip}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: "1fr" }}
            />
        </Box>
    )
}

export default AddressForm