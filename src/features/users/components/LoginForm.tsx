import { Box, Button, FormControl, Paper, TextField } from '@mui/material'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { login } from '../usersReducer';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const canSave = [email, password].every(Boolean);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = () => {
        dispatch(login({
        email,
        password,
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