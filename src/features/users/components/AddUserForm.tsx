import { Box, Button, FormControl, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const AddUserForm = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [role, setRole] = React.useState('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value)
  }

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value)
  }

  const handleAddUser = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    alert(`User ${name} added`)
  }


  return (
    <Box 
    maxWidth={500}
    component={Paper}
    sx={{ display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    m: '40px auto',
    p: '20px'
    }}>
        <Typography variant="h5" component="h5" gutterBottom>
            Add User
        </Typography>

        <FormControl sx={{ m: 1, width:'300px' }} variant="standard">
            <TextField
            id="name"
            label="Name"
            variant="standard"
            value={name}
            onChange={handleNameChange}
            />

            <TextField
            id="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={handleEmailChange}
            />

            <TextField
            id="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={handlePasswordChange}
            />

            <TextField
            id="confirmPassword"
            label="Confirm Password"
            variant="standard"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            />

            <TextField
            id="role"
            label="Role"
            variant="standard"
            value={role}
            onChange={handleRoleChange}
            />

            <Button
            variant="contained"
            onClick={handleAddUser}
            >
            Add User
            </Button>
        </FormControl>
    </Box>
  )
}

export default AddUserForm