import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { deleteCategory, getAllCategories } from '../categoriesReducer';
import useAppSelector from '../../../common/hooks/useAppSelector';
import useAppDispatch from '../../../common/hooks/useAppDispatch';

const CategoriesPage = () => {
    const { categories } = useAppSelector((state) => state.categoriesReducer);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const onDeleteCategory = (categoryId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')){
        dispatch(deleteCategory(categoryId));
    }
    }
    return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mx: '20px' }}>
        <TableContainer component={Paper}>
        <Button
        variant="contained"
        sx={{ mb: '20px' }}
        onClick={() => navigate('/categories/addCategory')}
        >Add Category</Button>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Category Name</TableCell>
                    <TableCell align="right">Category Image</TableCell>
                    <TableCell align="right">Category Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {categories?.map((category) => (
                    <TableRow
                    key={`${category._id}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {category.name}
                        </TableCell>
                        <TableCell align="right">{category.images && category.images[0]}</TableCell>
                        <TableCell align="right">
                            <Button >Edit</Button>
                            <Button
                            color='error'
                            onClick={() => onDeleteCategory(String(category._id))}
                            >Delete</Button>
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