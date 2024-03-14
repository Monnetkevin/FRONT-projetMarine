import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";
export const API_IMG = "http://127.0.0.1:8000/storage/uploads/";

export const API_ROUTE = {
  LOGIN: API_URL + "/login",
  LOGOUT: API_URL + "/logout",
  REGISTER: API_URL + "/register",

  PRODUCT: API_URL + "/products",
  // PRODUCTDETAIL: API_URL + "/products/{id}",
  LASTPRODUCT: API_URL + "/products/last",

  EVENT: API_URL + "/events",

  COMMENT: API_URL + "/comments",
  LASTCOMMENT: API_URL + "/comments/last",
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
  // productDetail: async () => {
  //   try {
  //     const res = await axios.get(API_ROUTE.PRODUCTDETAIL);
  //     if (res.data.status === "success") {
  //       return res.data.data;
  //     } else {
  //       return res.data.message;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  lastProduct: async () => {
    try {
      const res = await axios.get(API_ROUTE.LASTPRODUCT);
      if (res.data.status === "success") {
        return res.data.data;
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

  lastComment: async () => {
    try {
      const res = await axios.get(API_ROUTE.LASTCOMMENT);
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
