import React from "react";
import { Link } from "react-router-dom";
import { CardMedia } from '@mui/material';
import { Box } from "@mui/material";

import "./Card.scss";
import { Product } from "../../types/Product";

const Card = ({ product }: { product: Product}) => {
  return (
    <Link className="link" to={`/products/${product._id}`}>
      <Box component={'div'} className="card">
        <Box component={'div'} className="image">
          {/* {product?.isNew && <span>New Season</span>} */}
          <CardMedia
            component="img"
            src={product?.images[0]}
          />
        </Box>
        <h2>{product?.name}</h2>
        <Box component={'div'} className="prices">
          <h3>${product?.price + 20}</h3>
          <h3>${product?.price}</h3>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
