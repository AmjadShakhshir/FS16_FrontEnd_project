import { Box, Typography } from '@mui/material'

import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <Box component={'div'} p={4}>
        <Typography variant="h4" align="center" mt={3}>
            Sign up
        </Typography>
        <SignupForm />
    </Box>
  )
}

export default Signup