import React, { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { Link } from 'react-router-dom';

import './Product.scss'
import { Box, Button, Divider, Typography } from '@mui/material';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1027131/pexels-photo-1027131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  ];
  return (
    <Box className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImage(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImage(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <Box className="right">
        <Typography variant='h2' fontSize={'4em'}>Title</Typography>
        <Typography component="span" className='price'>price: $50</Typography>
        <Typography component="p" className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</Typography>
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