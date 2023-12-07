import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import './Product.scss'
import { Box, Button, Divider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useAppDispatch from '../../hooks/useAppDispatch';
import { getOneProduct } from '../../redux/reducers/productsReducer';
import useAppSelector from '../../hooks/useAppSelector';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const params = useParams<{id: string}>();
  const productId = params.id || '';
  const product = useAppSelector((state) => state.productsReducer.products.find((product) => product.name === productId));
  
  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, [dispatch, productId]);

  return (
    <Box className='product'>
      <div className="left">
        <div className="images">
          <img src={product?.images[0]} alt="" onClick={e=>setSelectedImage(0)}/>
        </div>
        <div className="mainImg">
          <img src={product?.images[selectedImage]} alt="" />
        </div>
      </div>
      <Box className="right">
        <Typography variant='h2' fontSize={'4em'}>{product?.name}</Typography>
        <Typography component="span" className='price'>price: ${product?.price}</Typography>
        <Typography component="p" className='p'>{product?.description}</Typography>
        <Box component='div' className="quantity">
          <Button className='btn' onClick={()=> setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</Button>
          <span>{quantity}</span>
          <Button className='btn' onClick={()=> setQuantity( prev => prev + 1 )}>+</Button>
        </Box>
        <Button className='add'>
          <AddShoppingCartIcon /> Add To Cart
        </Button>
        <Box component='div' className="links">
          <Box component='div' className="item">
            <FavoriteBorderIcon />
            <Typography component='span'>Add To Wishlist</Typography>
          </Box>
          <Box component='div' className="item">
            <BalanceIcon /> Add To Compare
          </Box>
        </Box>
        <Box component='div' className="info">
              <Typography component='span'>Vendor: Polo</Typography>
              <Typography component='span'>Product Type: T-Shirt</Typography>
              <Typography component='span'>Tag: T-Shirt, Women, Top</Typography>
        </Box>
        <Divider />
        <Box component='div' className="info">
          <Typography component='span'>DESCRIPTION</Typography>
          <Divider sx={{
            width: '50%',
          }} />
          <Typography component='span'>ADDITIONAL INFORMATION</Typography>
          <Divider sx={{
            width: '50%',
          }} />
          <Typography component='span'>FAQ</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Product