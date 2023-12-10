import React from 'react'
import useAppSelector from '../../../common/hooks/useAppSelector';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const CategoriesPage = () => {
    const { categories } = useAppSelector((state) => state.categoriesReducer);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mx: '20px' }}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Category Name</TableCell>
                    <TableCell align="right">Category Image</TableCell>
                    <TableCell align="right">Category Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {categories.map((category) => (
                    <TableRow
                    key={`${category._id}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {category.name}
                        </TableCell>
                        <TableCell align="right">{category.images[0]}</TableCell>
                        <TableCell align="right">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default CategoriesPage