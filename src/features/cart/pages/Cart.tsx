import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, Button, Typography } from '@mui/material';
import React from 'react'

import "../style/Cart.scss"
import useAppSelector from "../../../common/hooks/useAppSelector";

const Cart = () => {
  const cart = useAppSelector(state => state.cartReducer);

  return (
    <Box component='div' className="cart">
      <Typography component='h3'>Cart</Typography>
      {cart?.map((item) => (
        <Box component='div' className='item' key={`${item._id}`}>
          <img src={item.images[0]} alt={item.name} />
          <Box component={'div'} className="details">
            <Typography component='h4'>{item.name}</Typography>
            <Typography component='h4'>{item.description?.substring(0,100)}</Typography>
            <Typography component='h4' className="price">{item.quantity} * {item.price}</Typography>
          </Box>
          <DeleteOutlinedIcon className="delete"/>
        </Box>
      ))}
      <Box component='div' className='total'>
        <Typography component='h4'>SubTotal</Typography>
        <Typography component='h4'>€150</Typography>
      </Box>
      <Button variant='contained'>Proceed To Checkout</Button>
      <Typography component={'span'} className="reset ">Reset card</Typography>
    </Box>
  )
}

export default Cart