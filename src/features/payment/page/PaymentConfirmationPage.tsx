import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PaymentConfirmationPage: React.FC = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ m: '30px 0', p:'5em', border:'1px solid', borderRadius:'20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Payment Confirmation
                </Typography>
                <Typography variant="body1">
                    Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been emailed to you.
                </Typography>
            </Box>
        </Container>
    );
};

export default PaymentConfirmationPage;