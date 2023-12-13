import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import useAppSelector from '../../../common/hooks/useAppSelector';
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { deleteUser, getAllUsers } from '../usersReducer';

const UsersPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { users } = useAppSelector(state => state.usersReducer);

    useEffect(() => {
        if (users.length >= 0) {
            dispatch(getAllUsers());
        }
    }, [dispatch, users.length]);
    
    const onDeleteUser = (userId: string) => {
        if (window.confirm('Are you sure you want to delete this user?')){
            dispatch(deleteUser(userId));
            navigate('/users');
        }
    }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '950px', m: '20px auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" component="h4" gutterBottom>
                Users
            </Typography>
            <Button
            onClick={() => navigate('/users/addUser')}
            variant="contained"
            >Add User</Button>
        </Box>
        <TableContainer component={Paper}>
            <Table sx={{ m: '0px auto' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell align="right">User Email</TableCell>
                        <TableCell align="right">User Role</TableCell>
                        <TableCell align="right">User Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow
                        key={`${user._id}`}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.name}
                            </TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{}</TableCell>
                            <TableCell align="right">
                                <Button
                                onClick={()=> navigate(`/users/updateUser/${String(user._id)}`, { state: { user } })}
                                >Edit</Button>
                                <Button
                                color='error'
                                onClick={() => onDeleteUser(String(user._id))}
                                >Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default UsersPage