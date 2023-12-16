import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useNavigate, useParams } from 'react-router-dom';
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import useAppSelector from '../../../common/hooks/useAppSelector';
import { getUserById } from '../usersReducer';

const Profile = () => {
    const navigate = useNavigate();
    const params = useParams<{id: string}>();
    const userId = params.id || '';
    if (!userId || userId === '' || userId === 'undefined') {
        navigate('/users');
    }
    const users = useAppSelector(state => state.usersReducer.users.find(user => user._id.toString() === userId));
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUserById(userId));
    }, [dispatch, userId]);
    
    return (
        <Box sx={{ display: 'flex', p: 1 }}>
            <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
            </Box>
            <Box sx={{ flex: '2', p: 1 }}>
                <Typography variant="h4" component="div" gutterBottom>
                {users?.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                {users?.email}
                </Typography>
            </Box>
        </Box>
    );
};

export default Profile;