import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { addProduct } from '../productsReducer';

const AddProductForm = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState<string[]>([]);

    const canSave = [name, price, description, stock, images].every(Boolean);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value));
    }
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }
    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStock(Number(e.target.value));
    }
    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImages([e.target.value]);
    }
    const onAddProduct = () => {
        dispatch(addProduct(
            {
                name: name,
                price: price,
                description: description,
                images: images,
                stock: stock,
            }
        ));
        setName('');
        setPrice(0);
        setDescription('');
        setStock(0);
        setImages([]);
    }
  return (
    <Box component="div" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}>

        <Typography variant="h4" component="h4" sx={{m: 2}}>Add Product</Typography>
        
        <FormControl sx={{ m: 1, width:'300px' }} variant="standard">
            <TextField
            id="name"
            label="Name"
            variant="standard"
            color="primary"
            onChange={handleNameChange}
            required
            />
            <TextField
            id="price"
            label="Price"
            variant="standard"
            color="primary"
            onChange={handlePriceChange}
            required
            />
            <TextField
            id="description"
            label="Description"
            variant="standard"
            color="primary"
            onChange={handleDescriptionChange}
            required
            />
            <TextField
            id="stock"
            label="Stock"
            variant="standard"
            color="primary"
            onChange={handleStockChange}
            required
            />
            <TextField
            id="images"
            label="Images"
            variant="standard"
            color="primary"
            onChange={handleImagesChange}
            required
            />
            <Button
                variant="contained"
                type='submit'
                onClick={onAddProduct}
                disabled={!canSave}
                >Add</Button>
        </FormControl>
    </Box>
    )
}

export default AddProductForm