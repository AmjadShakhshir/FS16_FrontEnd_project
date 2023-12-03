import React from 'react'
import Card from '../Card/Card'
import useAppSelector from '../../hooks/useAppSelector'
import { Box } from '@mui/material'

const List = ({ subCats, maxPrice, sort, catId }: { subCats: string[], maxPrice: number, sort: any, catId: string | undefined }) => {
  const { products, loading } = useAppSelector((state) => state.productsReducer)
  const images = [
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3259600/pexels-photo-3259600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-between" }}>
      {loading
        ? "loading"
        : products?.map((item, index) => <Card product={item} key={item.id} image={images[index]} />)}
    </Box>
  )
}

export default List