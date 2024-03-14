import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_IMG, API_ROUTE } from "../../utils/RouteApi";
import Header from "../../components/menu/Header";
import Button from "../../components/utils/ButtonHome";
import FormProductComment from "../../components/comment/FormProductComment";

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
              <img
                src={API_IMG + `${productDetail.image[0].image_name}`}
                alt={productDetail.data.product_name}
              />
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
        </div>
      )}
    </>
  );
}

export default ProductDetails;
