import React from "react";
import Header from "../../components/menu/Header";
import ListProductShop from "../../components/product/ListProductShop";

function Shop() {
  return (
    <div className="container-shop">
      <Header title="Boutique" />
      <ListProductShop />
    </div>
  );
}

export default Shop;
