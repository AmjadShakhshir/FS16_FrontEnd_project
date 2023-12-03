import React from 'react'
import Card from '../Card/Card'
import useAppSelector from '../../hooks/useAppSelector'
import { Box } from '@mui/material'

const List = ({ subCats, maxPrice, sort, catId }: { subCats: string[], maxPrice: number, sort: any, catId: string | undefined }) => {
  const { products, loading } = useAppSelector((state) => state.productsReducer)
  
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-between" }}>
      {loading
        ? "loading"
        : products?.map((item) => <Card product={item} key={item.id} />)}
    </Box>
  )
}

export default List