import { Box, Button, FormControl, Paper, TextField } from '@mui/material'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { login } from '../usersReducer';

const LoginForm = () => {
    const [userInformation, setUserInformation] = useState({
        email: '',
        password: '',
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const canSave = [
        userInformation.email,
        userInformation.password
    ].every(Boolean);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInformation({
            ...userInformation,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = () => {
        dispatch(login({
        email: userInformation.email,
        password: userInformation.password,
        }))
        navigate('/')
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
                    id="email"
                    label="Email"
                    name="email"
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

                    <Button
                    variant="contained"
                    onClick={handleLogin}
                    disabled={!canSave}
                    type='submit'
                    sx={{ mt: '20px' }}
                    >
                    Login
                    </Button>
                </FormControl>
            </Box>
        </Box>
    )
}

export default LoginForm