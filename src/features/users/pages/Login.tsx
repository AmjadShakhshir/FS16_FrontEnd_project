import { Box, Typography } from '@mui/material'
import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <Box component={'div'} p={4}>
        <Typography variant="h4" align="center" mt={3}>
            Login
        </Typography>
        <LoginForm />
    </Box>
  )
}

export default Login