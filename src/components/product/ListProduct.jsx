import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import CardProduct from "./CardProduct";

function ListProduct() {
  const { products } = useGlobalContext();

  return (
    <div>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ListProduct;
