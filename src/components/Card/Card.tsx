import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";
import { Product } from "../../types/Product";

const Card = ({ product }: { product: Product }) => {
  return (
    <Link className="link" to={`/products/${product.id}`}>
      <div className="card">
        <div className="image">
          {product?.isNew && <span>New Season</span>}
          <img
            src={product?.images[0]}
            alt=""
            className="mainImg"
          />
          <img
            src={product?.images[1]}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{product?.title}</h2>
        <div className="prices">
          <h3>${product?.price || product?.price + 20}</h3>
          <h3>${product?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
