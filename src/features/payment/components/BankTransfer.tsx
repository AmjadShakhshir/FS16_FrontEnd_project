import { Formik } from 'formik'
import { PaymentDetails } from '../type/PaymentDetails'
import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'

const initialValues: PaymentDetails = {
    userId: "",
    method: "bank_transfer",
    bankName: "",
    accountNumber: "",
    shipmentInfo: {
        firstName: "",
        lastName: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    },
}


const BankTransfer = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={null}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="bankName"
                            label="Bank Name"
                            fullWidth
                            autoComplete="bank-name"
                            variant="standard"
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
            </Formik>
        </>
    )
}

export default BankTransfer