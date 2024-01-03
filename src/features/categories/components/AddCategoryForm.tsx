import React, { useState } from 'react'
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { addCategory } from '../categoriesReducer';
import { useNavigate } from 'react-router-dom';

const AddCategoryForm = () => {
    const [name, setName] = useState('');
    const [images, setImages] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const canSave = [name, images].every(Boolean);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImages([e.target.value]);
    }

    const onAddCategory = () => {
        dispatch(addCategory(
            {
                name,
                images,
            }
        ));
        setName('');
        setImages([]);
        navigate('/categories');
    } 
  return (
    <Box component="div" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}>

        <Typography variant="h4" component="h4" sx={{m: 2}}>Add Category</Typography>
        
        <FormControl sx={{ m: 1, width:'300px' }} variant="standard">
            <TextField
            id="name"
            label="Name"
            variant="standard"
            value={name}
            onChange={handleNameChange}
            />
        </FormControl>

        <FormControl sx={{ m: 1, width:'300px' }} variant="standard">
            <TextField
            id="images"
            label="Images"
            variant="standard"
            value={images}
            onChange={handleImagesChange}
            />
        </FormControl>

        <Button
        variant="contained"
        sx={{ m: 1, width:'300px' }}
        disabled={!canSave}
        onClick={onAddCategory}
        >Add Category</Button>
    </Box>
  )
}

export default AddCategoryForm