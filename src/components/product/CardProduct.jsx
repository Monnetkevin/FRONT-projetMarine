import React, { useState } from "react";
import Button from "../utils/ButtonHome";
import { API_IMG } from "../../utils/RouteApi";

function CardProduct({ product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="cardProduct">
      <div className="cardProduct-content" onClick={handleCardClick}>
        <div className="cardProduct-title">
          <h5>{product.product_name}</h5>
        </div>
        <div className="cardProduct-img">
          <img
            src={API_IMG + `${product.images[0].image_name}`}
            alt={product.product_name}
          />
        </div>
        {/* <div className="cardProduct-text">
          <p>{product.product_content}</p>
        </div> */}
        <Button linkTo={`/boutique/${product.id}`} size="large">
          Apercu
        </Button>
      </div>
      {/* <div className="cardProduct-backContent">
        <div className="backContent-text">
          <p>{product.product_content}</p>
        </div>
      </div> */}
    </div>
  );
}

export default CardProduct;
