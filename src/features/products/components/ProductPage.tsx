import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { Box, Button, Divider, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import '../style/Product.scss'
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { deleteProduct, getOneProduct } from '../productsReducer';
import useAppSelector from '../../../common/hooks/useAppSelector';
import { addProductToCart } from '../../cart/cartReducer';

const Product = () => {
  const params = useParams<{id: string}>();
  const productId = params.id || '';
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const product = useAppSelector((state) => state.productsReducer.products.find((product) => product._id.toString() === productId));
  const [quantity, setQuantity] = useState(1);
  
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, [dispatch, productId]);

  const onDeleteProduct = () => {
    if (window.confirm('Are you sure you want to delete this product?')){
      dispatch(deleteProduct(productId));
      navigate('/products');
    }
  }

  const onAddToCart = () => {
    if (product) dispatch(addProductToCart({ ...product, quantity: quantity}));
  }

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
        <Button
        className='add'
        onClick={onAddToCart}
        >
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
          <Box component='div' className="item">
            <Button className="updateProduct" onClick={() => navigate(`/updateProduct/${product?._id}`, { state: { product } })}>
                Update Product
            </Button>
            <Button variant="contained" color="error" onClick={onDeleteProduct}>Delete</Button>
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