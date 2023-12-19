import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, Button, Typography } from '@mui/material';

import "../style/Cart.scss"
import useAppSelector from "../../../common/hooks/useAppSelector";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import { removeProductFromCart, resetCart } from "../cartReducer";

const Cart = () => {
  const cart = useAppSelector(state => state.cartReducer);
  const dispatch = useAppDispatch();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleDelete = (_id: string) => {
    dispatch(removeProductFromCart(_id));
  }

  const handleReset = () => {
    dispatch(resetCart());
  }
  
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
          <DeleteOutlinedIcon
          className="delete"
          onClick={() => handleDelete(item._id.toString())}
          />
        </Box>
      ))}
      <Box component='div' className='total'>
        <Typography component='h4'>SubTotal</Typography>
        <Typography component='h4'>€{total}</Typography>
      </Box>
      <Button variant='contained'>Proceed To Checkout</Button>
      <Typography
      component={'span'}
      className="reset"
      onClick={handleReset}
      >Reset card</Typography>
    </Box>
  )
}

export default Cart
