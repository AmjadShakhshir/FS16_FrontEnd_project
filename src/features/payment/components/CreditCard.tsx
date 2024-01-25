import { Grid, TextField, FormControlLabel, Checkbox } from '@mui/material'
import { Formik } from 'formik';

import { CreditPaymentInitialValues } from '../type/CreditPaymentInitialValues';
import { CheckoutInitialValues } from '../../checkout/types/CheckoutInitialValues';

const initialValues: CreditPaymentInitialValues = {
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    saveCard: false,
}

const CreditCard = ({ values, errors, touched, handleChange, handleBlur, setFieldValue }: {
    values: CheckoutInitialValues,
    errors: any,
    touched: any,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleBlur: React.FocusEventHandler<HTMLInputElement>,
    setFieldValue: any
}) => {
    return (
    <>
        <Formik
            initialValues={ initialValues}
            onSubmit={() => {}}
            validationSchema={null}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cardName"
                    label="Name on card"
                    fullWidth
                    autoComplete="cc-name"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cardNumber"
                    label="Card number"
                    fullWidth
                    autoComplete="cc-number"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="expDate"
                    label="Expiry date"
                    fullWidth
                    autoComplete="cc-exp"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cvv"
                    label="CVV"
                    helperText="Last three digits on signature strip"
                    fullWidth
                    autoComplete="cc-csc"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                    label="Remember credit card details for next time"
                />
                </Grid>
            </Grid>
        </Formik>
    </>
  )
}

export default CreditCard