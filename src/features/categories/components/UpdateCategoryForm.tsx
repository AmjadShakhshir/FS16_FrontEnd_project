import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { updateCategory } from '../categoriesReducer';

const UpdateCategoryForm = () => {
    const [name, setName] = useState('');
    const [images, setImages] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const params = useParams<{id: string}>();
    const categoryId = params.id || '';
    const categoryParams = useLocation();
    const navigate = useNavigate();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImages([e.target.value]);
    }

    const onUpdateCategory = () => {
        dispatch(updateCategory({
            _id: categoryId,
            update: {
                name: name,
                images: images
            }
        }));
        navigate(`/categories`);
    }

    useEffect(() => {
        if (categoryParams.state) {
            setName(categoryParams.state.category.name);
            setImages(categoryParams.state.category.images);
        } else {
            navigate(`/categories`);
        }
    }, [categoryParams, navigate]);
    return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mx: '20px' }}>
        <Typography variant="h4" component="h4" gutterBottom>
            Update Category
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
            id="images"
            label="Images"
            variant="standard"
            value={images}
            onChange={handleImagesChange}
            />

            <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onUpdateCategory}
            >
                Update Category
            </Button>
        </FormControl>
    </Box>
  )
}

export default UpdateCategoryForm