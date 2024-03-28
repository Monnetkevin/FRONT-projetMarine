import React from "react";
import Button from "../utils/ButtonHome";
import { API_IMG } from "../../utils/RouteApi";

function CardProduct({ product }) {
  return (
    <div className="cardProduct">
      <div className="cardProduct-content">
        <div className="cardProduct-title">
          <h5>{product.product_name}</h5>
        </div>
        <div className="cardProduct-img">
          {product.images[0] && (
            <img
              src={API_IMG + `${product.images[0].image_name}`}
              alt={product.product_name}
            />
          )}
        </div>

        <Button linkTo={`/boutique/${product.id}`} size="large">
          Aperçu
        </Button>
      </div>
    </div>
  );
}

export default CardProduct;
