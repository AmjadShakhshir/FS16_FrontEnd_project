import { Box, Button, FormControl, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { addUser } from '../usersReducer';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useAppDispatch();

  const canSave = [name, email, password, confirmPassword].every(Boolean);

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

  const handleAddUser = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    dispatch(addUser({
      name,
      email,
      password,
    }))
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
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
            type="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={handlePasswordChange}
            />

            <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="standard"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            />

            <Button
            variant="contained"
            onClick={handleAddUser}
            disabled={!canSave}
            type='submit'
            sx={{ mt: '20px' }}
            >
            Add User
            </Button>
        </FormControl>
        <Link href='/users' sx={{ display: 'flex',mt: '20px', textDecoration: 'none' }}>
          <ArrowBackIosNewIcon />
          <Typography
          variant="body1"
          component="span"
          sx={{ ml: '5px' }}
          >
            Back to Users
          </Typography>
        </Link>
    </Box>
  )
}

export default AddUserForm