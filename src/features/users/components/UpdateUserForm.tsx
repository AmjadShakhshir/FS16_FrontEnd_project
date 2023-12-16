import { Box, Button, FormControl, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../usersReducer';

const UpdateUserForm = () => {
    const [userInformation, setUserInformation] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();
    const params = useParams<{id: string}>();
    const userId = params.id || '';
    const navigate = useNavigate();

    const canSave = [].every(Boolean);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'password') {
            if (event.target.value !== confirmPassword) {
                window.alert('Password and Confirm Password do not match');
            }
        }
        setUserInformation({
            ...userInformation,
            [event.target.name]: event.target.value
        })
    }

    const onConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value)
    }

    const onUpdateUser = () => {
        dispatch(updateUser({
            _id: userId,
            update: {
                name: userInformation.name,
                email: userInformation.email,
                password: userInformation.password
            }
        }));
        navigate(`/users`);
    }

    // useEffect(() => {
    //     if (userParams.state && userParams.state.user) {
    //         setUserInformation({
    //             name: userParams.state.user.name,
    //             email: userParams.state.user.email,
    //         })
    //     }
    // }, [userParams, navigate]);
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
            name="name"
            label="Name"
            variant="standard"
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
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="standard"
            onChange={onConfirmPasswordChange}
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