import { Box, Typography } from '@mui/material'

import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <Box component={'div'} p={1}>
        <Typography variant="h4" align="center" mt={3}>
            Sign up
        </Typography>
        <SignupForm />
        <Typography variant="body1" align="center" mt={3}>
            Already have an account? <a href="/login">Login</a>
        </Typography>
    </Box>
  )
}

export default Signup