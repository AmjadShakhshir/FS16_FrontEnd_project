import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useNavigate, useParams } from 'react-router-dom';
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import useAppSelector from '../../../common/hooks/useAppSelector';
import { getUserById } from '../usersReducer';

const Profile = () => {
    const navigate = useNavigate();
    const params = useParams();
    const userId = params.id || '';
    const users = useAppSelector(state => state.authReducer.currentUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!userId) {
            navigate('/');
        } else {
            dispatch(getUserById(userId));
        }
    }, [dispatch, userId, navigate]);
    
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