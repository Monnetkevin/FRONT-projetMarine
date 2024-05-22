import React, { useEffect, useRef } from "react";
import { useShop } from "../../components/context/CartContext";
import { API_IMG, API_ROUTE } from "../../utils/RouteApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import auth from "../../components/auth/Token";
import Toast from "../../utils/Toast";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartVisible, setCartVisible }) => {
  const cartRef = useRef(null);
  const { currentCart, setCurrentCart, products, setProducts } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  //   console.log(currentCart);

  const deleteProductCart = async (id) => {
    try {
      const request = {
        shopSession_id: currentCart.id,
        product_id: id,
        product_quantity: 1,
      };
      const res = await axios.post(API_ROUTE.REMOVEPRODUCTSHOP, request, {
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
      });
      if (res.data.status === "success") {
        Toast.toastSuccess(res.data.message);

        let updateCart = currentCart;
        updateCart.products = currentCart.products.filter(
          (item) => item.id !== id
        );

        setCurrentCart(updateCart);

        setProducts(products.filter((item) => item.id !== id));
      }
    } catch (error) {
      Toast.toastError("erreur");
      console.log(error);
    }
  };

  const checkOut = async (id) => {
    try {
      const res = await axios.post(API_ROUTE.CHECKOUT + `${id}`, null, {
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
      });
      if (res.data.status === "success") {
        window.location.href = res.data.data.url;
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart-container">
      <div ref={cartRef} className={`cart ${cartVisible ? "open" : ""}`}>
        <div className="cart-container__title">
          <h2>Panier</h2>
        </div>

        <div className="cart-items">
          {currentCart.length < 1 ? (
            <div className="">Aucun panier trouvé</div>
          ) : (
            products.map((product) => (
              <li className="cart-items__product" key={product.id}>
                <div className="cart-items__product__img">
                  <img
                    src={API_IMG + `${product.image}`}
                    alt={product.product_name}
                  />
                </div>
                <div className="cart-items__product__container">
                  <div className="cart-items__product__container__title">
                    {product.product_name}
                  </div>
                  <div className="cart-items__product__container__price">
                    {product.price} €
                  </div>
                  <select name="product_quantity" id="product_quantity">
                    <option value="product_quantity">1</option>
                    <option value="product_quantity">2</option>
                    <option value="product_quantity">3</option>
                  </select>
                </div>
                <div className="cart-items__product__icon">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteProductCart(product.id)}
                  />
                </div>
              </li>
            ))
          )}
          {currentCart && (
            <div className="cart-items__checkout">
              <div className="cart-items__checkout__total">
                {currentCart.total} €
              </div>
              <button
                onClick={() => checkOut(currentCart.id)}
                className="cart-items__checkout__pay"
              >
                Payer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
