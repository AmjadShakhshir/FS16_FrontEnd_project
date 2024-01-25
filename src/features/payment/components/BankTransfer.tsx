import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'

import { CheckoutInitialValues } from '../../checkout/types/CheckoutInitialValues'

const BankTransfer = ({ values, errors, touched, handleChange, handleBlur, setFieldValue }: {
    values: CheckoutInitialValues,
    errors: any,
    touched: any,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleBlur: React.FocusEventHandler<HTMLInputElement>,
    setFieldValue: any
}) => {
    values.paymentMethod = "Bank Transfer";
    return (
        <>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="bankName"
                            label="Bank Name"
                            fullWidth
                            autoComplete="bank-name"
                            variant="standard"
                            value={values.bankName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!(touched.bankName && errors.bankName)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="accountNumber"
                            label="Account Number"
                            fullWidth
                            autoComplete="account-number"
                            variant="standard"
                            value={values.accountNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!(touched.accountNumber && errors.accountNumber)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="swiftCode"
                            label="Swift Code"
                            fullWidth
                            autoComplete="swift-code"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="iban"
                            label="IBAN"
                            fullWidth
                            autoComplete="iban"
                            helperText="International Bank Account Number"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Remember bank account for next time"
                        />
                    </Grid>
                </Grid>
        </>
    )
}

export default BankTransfer