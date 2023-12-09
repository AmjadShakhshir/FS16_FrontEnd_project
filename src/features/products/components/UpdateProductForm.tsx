import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { updateProduct } from '../productsReducer';

const UpdateProductForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const productParams = useLocation();
    const params = useParams<{id: string}>();
    const productId = params.id || '';
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState<string[]>([]);

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
    const onUpdateProduct = () => {
        dispatch(updateProduct(
            {
                _id: productId,
                update: {
                    name: name,
                    price: price,
                    description: description,
                    stock: stock,
                    images: images
                }
            }
        ));
        navigate(`/products/${productId}`);  
    }

    useEffect(() => {
        setName(productParams.state.product.name);
        setPrice(productParams.state.product.price);
        setDescription(productParams.state.product.description);
        setStock(productParams.state.product.stock);
        setImages(productParams.state.product.images);
    }, [productParams.state.product]);

    return (
    <Box component="div" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}>

        <Typography variant="h4" component="h4" sx={{m: 2}}>Update Product</Typography>
        
        <FormControl sx={{ m: 1, width:'300px' }} variant="standard">
            <TextField
            id="name"
            label="Name"
            value={name}
            variant="standard"
            color="primary"
            onChange={handleNameChange}
            required
            />
            <TextField
            id="price"
            label="Price"
            value={price}
            variant="standard"
            color="primary"
            onChange={handlePriceChange}
            required
            />
            <TextField
            id="description"
            label="Description"
            value={description}
            variant="standard"
            color="primary"
            onChange={handleDescriptionChange}
            required
            />
            <TextField
            id="stock"
            label="Stock"
            value={stock}
            variant="standard"
            color="primary"
            onChange={handleStockChange}
            required
            />
            <TextField
            id="images"
            label="Images"
            value={images}
            variant="standard"
            color="primary"
            onChange={handleImagesChange}
            required
            />
            <Button
                variant="contained"
                type='submit'
                onClick={onUpdateProduct}
                >Update</Button>
        </FormControl>
    </Box>
    )
}

export default UpdateProductForm