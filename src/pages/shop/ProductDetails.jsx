import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_IMG, API_ROUTE } from "../../utils/RouteApi";
import Header from "../../components/menu/Header";
import Button from "../../components/utils/ButtonHome";
import FormProductComment from "../../components/comment/FormProductComment";
import SeparatorDetailProduct from "../../components/utils/SeparatorDetailProduct";
import ListComment from "../../components/comment/ListComment";

function ProductDetails() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const detail = async () => {
    try {
      await axios.get(API_ROUTE.PRODUCT + `/${id}`).then((res) => {
        if (res.data.status === "success") {
          setProductDetail(res.data);
          setIsLoaded(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    detail();
  }, [id]);

  return (
    <>
      {isLoaded && (
        <div className="container-shopDetail">
          <Header title={productDetail.data.product_name} />
          <div className="shopDetail">
            <div className="shopDetail__img">
              {productDetail.image[0] ? (
                <img
                  src={API_IMG + `${productDetail.image[0].image_name}`}
                  alt={productDetail.data.product_name}
                />
              ) : (
                <p>Pas d'image</p>
              )}
            </div>
            <div className="shopDetail__content">
              <div className="shopDetail__content__title">
                <h3>{productDetail.data.product_name}</h3>
              </div>
              <div className="shopDetail__content__text">
                <p>{productDetail.data.product_content}</p>
              </div>
              <div className="shopDetail__content__price">
                <p>{productDetail.data.price} €</p>
                <Button color="primary">Ajouter au panier</Button>
              </div>
            </div>
          </div>
          <FormProductComment id={id} />
          <SeparatorDetailProduct />
          <div className="container-commentshopDetail">
            <div className="commentShopDetail">
              <div className="commentShopDetail__title">
                <h5>Les commentaires du livre</h5>
              </div>
              <ListComment id={id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
