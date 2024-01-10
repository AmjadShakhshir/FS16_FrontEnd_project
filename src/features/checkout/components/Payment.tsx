import { Box, Typography, TextField } from '@mui/material';
import { InitialValues } from '../types/InitialValues';

const Payment = ({ values, errors, touched, handleChange, handleBlur, setFieldValue }: {
    values: InitialValues,
    errors: any,
    touched: any,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleBlur: React.FocusEventHandler<HTMLInputElement>,
    setFieldValue: any
}) => {
  return (
    <Box m="30px 0">
        { /* Contact Info */}
        <Box>
            <Typography sx={{ mb: "15px" }} fontSize="1.2em">
                Contact Information
            </Typography>
            <TextField
                fullWidth
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4", marginBottom: "15px" }}
            />

            <TextField
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!(touched.phoneNumber && errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 4" }}
            />
        </Box>
    </Box>
  )
}

export default Payment
