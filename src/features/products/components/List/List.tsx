import { Box } from '@mui/material';

import Card from '../../../../common/components/Card/Card';
import { Product } from '../../types/Product';

const List = ({ products, loading, subCats, maxPrice, sort, catId }: 
  { 
    subCats: string[],
    maxPrice: number,
    sort: string,
    catId: string | undefined,
    products: Product[] | undefined,
    loading: boolean
  }) => {

    const filterProducts = products?.filter((item) => {
      if (catId) {
        return item.categoryId === catId;
      } else {
        return item;
      }
    });
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap:3 }}>
      {loading
        ? "loading"
        : filterProducts?.map((item, index) => <Card product={item} key={`${item._id} + ${index}`} />)}
    </Box>
  )
}

export default List