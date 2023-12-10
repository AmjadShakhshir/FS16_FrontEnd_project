import React from 'react'
import Card from '../../../../common/components/Card/Card'
import useAppSelector from '../../../../common/hooks/useAppSelector'
import { Box } from '@mui/material'

const List = ({ subCats, maxPrice, sort, catId }: { subCats: string[], maxPrice: number, sort: string, catId: string | undefined }) => {
  const { products, loading } = useAppSelector((state) => state.productsReducer)
  
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-between" }}>
      {loading
        ? "loading"
        : products?.map((item, index) => <Card product={item} key={`${item._id} + ${index}`} />)}
    </Box>
  )
}

export default List