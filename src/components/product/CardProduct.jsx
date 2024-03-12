import React from "react";
import Button from "../utils/ButtonHome";
import { API_IMG } from "../../utils/RouteApi";

function CardProduct({ product }) {
  return (
    <div className="container-card">
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            <h5>{product.product_name}</h5>
          </div>
          <div className="card-img">
            <img
              src={API_IMG + `${product.images[0].image_name}`}
              alt={product.product_name}
            />
          </div>
          <div className="card-text">
            <p>{product.product_content}</p>
          </div>
          <Button linkTo="/" size="large">
            Apercu
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
