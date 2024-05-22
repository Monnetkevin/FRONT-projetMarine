import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "../../components/context/LoginContext";
import auth from "../../components/auth/Token";
import { API_ROUTE } from "../../utils/RouteApi";
import axios from "axios";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [currentCart, setCurrentCart] = useState([]);
  const [products, setProducts] = useState([]);

  const { user } = useAuth();

  const contextValue = { currentCart, setCurrentCart, setProducts, products };

  const fetchCart = async () => {
    try {
      const res = await axios.get(API_ROUTE.VIEWSHOP + `${user.id}`, {
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
      });
      if (res.data.status === "success") {
        setCurrentCart(res.data.data);
        setProducts(res.data.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useShop = () => useContext(CartContext);
