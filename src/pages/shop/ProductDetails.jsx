import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../components/context/LoginContext";
import { API_IMG, API_ROUTE } from "../../utils/RouteApi";
import Header from "../../components/menu/Header";
import FormProductComment from "../../components/comment/FormProductComment";
import SeparatorDetailProduct from "../../components/utils/SeparatorDetailProduct";
import ListComment from "../../components/comment/ListComment";
import auth from "../../components/auth/Token";
import Toast from "../../utils/Toast";
import { useGlobalContext } from "../../components/context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import Button from "../../components/utils/ButtonHome";

function ProductDetails() {
  const { id } = useParams();
  const { token, user } = useAuth();
  const { products, setProducts } = useGlobalContext();
  const [productDetail, setProductDetail] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const detail = async () => {
    try {
      const res = await axios.get(API_ROUTE.PRODUCT + `/${id}`);
      if (res.data.status === "success") {
        setProductDetail(res.data);
        setIsLoaded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    detail();
  }, [id]);

  const addToCart = async () => {
    try {
      const request = { product_id: id, product_quantity: 1 };
      const res = await axios.post(API_ROUTE.ADDTOCART, request, {
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
      });
      if (res.data.status === "success") {
        setProducts((prev) => [...prev, res.data.data]);

        Toast.toastSuccess(res.data.message, res.data.message);
      } else {
        Toast.toastError(res.data.message);
      }
    } catch (error) {
      Toast.toastError("erreur");
      console.log(error);
    }
  };

  const deleteProduct = async () => {
    try {
      const res = await axios.delete(API_ROUTE.PRODUCT + `/${id}`, {
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
      });
      if (res.data.status === "success") {
        setProducts((prev) => prev.filter((item) => item.id !== id));
        Toast.toastSuccess(res.data.message);
        navigate("/boutique");
      } else {
        Toast.toastError(res.data.message);
      }
    } catch (error) {
      Toast.toastError("erreur");
      console.log(error);
    }
  };

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
                {token && (
                  <div className="shopDetail__content__btn">
                    {user.role_id === 2 && (
                      <div className="">
                        <button className="shopDetail__content__btn__update">
                          Modifier
                        </button>
                        <button
                          className="shopDetail__content__btn__update"
                          onClick={() => {
                            deleteProduct();
                          }}
                        >
                          Supprimer
                        </button>
                      </div>
                    )}
                    <button
                      className="shopDetail__content__btn__add"
                      onClick={addToCart}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                )}
              </div>
              {user.role_id === 2 && (
                <div className="shopDetail__content__icon">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              )}
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
