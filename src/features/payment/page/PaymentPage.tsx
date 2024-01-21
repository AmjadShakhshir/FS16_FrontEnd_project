import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

import { CartItemType } from '../../cart/types/CartItemType';
import useAppSelector from '../../../common/hooks/useAppSelector';
import useAppDispatch from '../../../common/hooks/useAppDispatch';
import { decreaseProductQuantity, increaseProductQuantity } from '../../cart/cartReducer';

const PaymentPage = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cartReducer);
    const [total, setTotal] = useState(0);
    
    const handleDecreseQuantity = (id: string) => {
        dispatch(decreaseProductQuantity(id))
    }

    const handleIncreaseQuantity = (id: string) => {
        console.log('increase',id)
        dispatch(increaseProductQuantity(id))
    }

    useEffect(() => {
        const total = cart.reduce((acc, cur) => {
            return acc + cur.price * cur.quantity
        }, 0);
        setTotal(total)
    }, [cart]);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 950, margin: "0 auto" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map((row: CartItemType, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">
                                <Box className="quantity">
                                    <Button className='btn' onClick={() =>
                                        handleDecreseQuantity(row._id)
                                    }>-</Button>
                                    <span>
                                        { row.quantity }
                                    </span>
                                    <Button className='btn' onClick={()=> 
                                        handleIncreaseQuantity(row._id)
                                    }>+</Button>
                                </Box>
                            </TableCell>
                            <TableCell align="right">{ row.quantity * row.price }</TableCell>
                            <TableCell align="right"><img src={row.images[0]} alt={row.name} width="100" /></TableCell>
                        </TableRow>
                    ))}
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                    onClick={() => 0}
                    >
                        <TableCell colSpan={5} align="right">
                            <Button variant="contained" color="primary">
                                Pay
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter >
                    <TableRow>
                        <TableCell colSpan={1}>Subtotal</TableCell>
                        <TableCell align="right">{total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}>Tax</TableCell>
                        <TableCell align="right">{(total * 0.1).toFixed(1)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={1}>Total</TableCell>
                        <TableCell align="right">{total + total * 0.1}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default PaymentPage