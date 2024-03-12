import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";
export const API_IMG = "http://127.0.0.1:8000/storage/uploads/";

export const API_ROUTE = {
  LOGIN: API_URL + "/login",
  LOGOUT: API_URL + "/logout",
  REGISTER: API_URL + "/register",

  PRODUCT: API_URL + "/products",
  LASTPRODUCT: API_URL + "/products/last",
  EVENT: API_URL + "/events",
  COMMENT: API_URL + "/comments",
};

export const API_FUNCTION = {
  products: async () => {
    try {
      const res = await axios.get(API_ROUTE.PRODUCT);
      if (res.data.status === "success") {
        return res.data.data;
      } else {
        return res.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  },

  lastProduct: async () => {
    try {
      const res = await axios.get(API_ROUTE.LASTPRODUCT);
      if (res.data.status === "success") {
        return res.data.lastproduct;
      } else {
        return res.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  },

  events: async () => {
    try {
      const res = await axios.get(API_ROUTE.EVENT);
      if (res.data.status === "success") {
        return res.data.data;
      } else {
        return res.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  },

  comments: async () => {
    try {
      const res = await axios.get(API_ROUTE.COMMENT);
      if (res.data.status === "success") {
        return res.data.data;
      } else {
        return res.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
