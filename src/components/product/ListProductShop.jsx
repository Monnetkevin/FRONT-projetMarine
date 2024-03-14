import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import CardProduct from "./CardProduct";

function ListProductShop() {
  const { products } = useGlobalContext();

  return (
    <div className="list-cardProduct">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ListProductShop;
