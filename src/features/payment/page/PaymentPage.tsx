import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CartItemType } from '../../cart/types/CartItemType';

const PaymentPage = () => {
    const location = useLocation();
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    useEffect(() => {
        if (location.state.cart) {
            const newCartItems = location.state.cart.map((item : any) => ({
                ...item,
                quantity: item.quantity,
                total: item.quantity * item.price
            }));
            setCartItems(newCartItems);
        }
    }, [location.state.cart]);

    const updateQuantity = (id: string, newQuantity: number) => {
        setCartItems(prevItems => prevItems.map(item => 
            item._id === id? {
                ...item,
                quantity: newQuantity,
                total: newQuantity * item.price
            } : item
        ));
        console.log(id)
    }

    const finishPayment = () => {
        console.log('payment finished');
    }

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
                    {cartItems.map((row: CartItemType) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">
                                <Box className="quantity">
                                    <Button className='btn' onClick={()=> row.quantity > 1 && updateQuantity(row._id, row.quantity - 1)}>-</Button>
                                    <span>
                                        { row.quantity }
                                    </span>
                                    <Button className='btn' onClick={()=> updateQuantity(row._id, row.quantity + 1)}>+</Button>
                                </Box>
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right"><img src={row.images[0]} alt={row.name} width="100" /></TableCell>
                        </TableRow>
                    ))}
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                    onClick={finishPayment}
                    >
                        <TableCell colSpan={5} align="right">
                            <Button variant="contained" color="primary">
                                Pay
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
                {/* <TableFooter >
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
                </TableFooter> */}
            </Table>
        </TableContainer>
    )
}

export default PaymentPage