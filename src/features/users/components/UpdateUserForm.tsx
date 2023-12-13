import { Box, Button, FormControl, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../usersReducer';

const UpdateUserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();
    const params = useParams<{id: string}>();
    const userId = params.id || '';
    const navigate = useNavigate();
    const userParams = useLocation();

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

    const onUpdateUser = () => {
        dispatch(updateUser({
            _id: userId,
            update: {
                name: name,
                email: email,
                password: password,
            }
        }));
        navigate(`/users`);
    }

    useEffect(() => {
        if (userParams.state && userParams.state.user) {
            setName(userParams.state.user.name);
            setEmail(userParams.state.user.email);
        }
    }, [userParams, navigate]);
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
        <Typography variant="h4" component="h4" gutterBottom>
            Update User
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
            onClick={onUpdateUser}
            variant="contained"
            disabled={!canSave}
            type='submit'
            >Update User</Button>
        </FormControl>
    </Box>
  )
}

export default UpdateUserForm