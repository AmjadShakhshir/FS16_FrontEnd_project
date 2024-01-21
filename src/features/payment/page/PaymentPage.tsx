import { Box, Typography, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import CreditCard from '../components/CreditCard';
import BankTransfer from '../components/BankTransfer';

const PaymentPage = () => {
    const [value, setValue] = useState('Credit Card');
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    return (
        <Box width="80%" m="30px 0">
            <Box>
                <Typography sx={{ mb: "15px" }} fontSize="1.2em">
                    Payment Info
                </Typography>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                        Payment Method
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="Credit Card"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
                        <FormControlLabel value="Bank Transfer" control={<Radio />} label="Bank Transfer" />
                    </RadioGroup>
                </FormControl>
                {value === "Credit Card" && (
                    <CreditCard />
                )}
                {value === "Bank Transfer" && (
                    <BankTransfer />
                )}
            </Box>
        </Box>
    )
}

export default PaymentPage