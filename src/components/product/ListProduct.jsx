import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import CardProduct from "./CardProduct";

function ListProduct() {
  const { products } = useGlobalContext();

  const threeProducts = products ? products.slice(-3) : [];
  return (
    <div className="list-cardProduct">
      {threeProducts.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ListProduct;
