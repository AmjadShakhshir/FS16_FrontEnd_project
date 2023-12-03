import React from "react";
import { Link } from "react-router-dom";
import { CardMedia } from '@mui/material';

import "./Card.scss";
import { Product } from "../../types/Product";
import { Box } from "@mui/material";

const Card = ({ product, image }: { product: Product, image: string }) => {
  return (
    <Link className="link" to={`/products/${product.id}`}>
      <Box component={'div'} className="card">
        <Box component={'div'} className="image">
          {/* {product?.isNew && <span>New Season</span>} */}
          <CardMedia
            component="img"
            src={`${image}.jpeg`}
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
