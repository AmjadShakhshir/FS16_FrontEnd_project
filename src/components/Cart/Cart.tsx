import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, Button, Typography } from '@mui/material';
import React from 'react'

import "./Cart.scss"

const Cart = () => {
  const data = [
    {
      id: 1,
      title: "T-Shirt",
      price: 50,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      quantity: 1,
      image: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 2,
      title: "T-Shirt",
      price: 50,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      quantity: 1,
      image: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 3,
      title: "T-Shirt",
      price: 50,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      quantity: 1,
      image: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }];

  return (
    <Box component='div' className="cart">
      <Typography component='h3'>Cart</Typography>
      {data?.map((item) => (
        <Box component='div' className='item' key={item.id}>
          <img src={item.image} alt={item.title} />
          <Box component={'div'} className="details">
            <Typography component='h4'>{item.title}</Typography>
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