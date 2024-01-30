import { Box, Button, FormControl, TextField, Typography } from '@mui/material'

const ContactUs = () => {
    return (
        <Box m="30px auto" p="35px" height={'50vh'} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '10px',
            width: '80%',
        }}>
            <Typography sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '20px',
            }} >
                Contact
            </Typography>
            <FormControl sx={{
                width: '50%',
                marginBottom: '20px',
            }}>
                <label htmlFor="name">Name</label>
                <TextField
                    id="name"
                    variant="outlined"
                    placeholder="Enter your name"
                    fullWidth
                />
                <TextField
                    id="email"
                    variant="outlined"
                    placeholder="Enter your email"
                    fullWidth
                    sx={{
                        marginTop: '20px',
                    }}
                />
                <TextField
                    id="message"
                    variant="outlined"
                    placeholder="Enter your message"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                        marginTop: '20px',
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Send
                </Button>
            </FormControl>

        </Box>
    )
}

export default ContactUs