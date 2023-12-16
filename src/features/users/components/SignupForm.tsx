import { Box, Button, FormControl, Paper, TextField } from '@mui/material'
import React, { useState } from 'react';

import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { signup } from '../usersReducer';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [userInformation, setUserInformation] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const canSave = [userInformation, confirmPassword].every(Boolean);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInformation({
            ...userInformation,
            [event.target.name]: event.target.value
        });
    }

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value)
    }

    const handleAddUser = () => {
        if ( userInformation.password !== confirmPassword ) {
            window.alert('Password and Confirm Password do not match');
        }
        dispatch(signup({
        name: userInformation.name,
        email: userInformation.email,
        password: userInformation.password,
        logInWithGoogle: false,
        }))
        navigate('/login')
    }

    return (
        <Box 
        component={Paper}
        sx={{ display: 'flex',
        maxWidth: '1000px',
        maxHeight: '600px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderRadius: '10px',
        m: '40px auto',
        p: '50px 20px'
        }}>
            <Box
            component={'div'}
            style={{ 
            height: '100%', 
            objectFit: 'cover' 
            }}>
                <img src='https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg' alt='signup' width={500} />
            </Box>

            <Box component={'div'} sx={{ ml: '50px' }}>
                <FormControl sx={{ m: 1, width:'300px' }} variant="standard">
                    <TextField
                    id="name"
                    label="Name"
                    variant="standard"
                    name="name"
                    onChange={onChangeHandler}
                    />

                    <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="standard"
                    onChange={onChangeHandler}
                    />

                    <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    variant="standard"
                    onChange={onChangeHandler}
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
                    Signup
                    </Button>
                </FormControl>
            </Box>
        </Box>
    )
}

export default SignupForm