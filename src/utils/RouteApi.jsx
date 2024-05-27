import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/api";
// export const API_IMG = "http://127.0.0.1:8000/storage/uploads/";

const API_URL = "https://api-matisse-marine.asnprojets.fr/api";
export const API_IMG =
  "https://api-matisse-marine.asnprojets.fr/storage/uploads/";

export const API_ROUTE = {
  COMMENT: API_URL + "/comments",
  LASTCOMMENT: API_URL + "/comments/last",

  LOGIN: API_URL + "/login",
  LOGOUT: API_URL + "/logout",
  REGISTER: API_URL + "/register",

  PRODUCT: API_URL + "/products",
  LASTPRODUCT: API_URL + "/products/last",

  EVENT: API_URL + "/events",

  ADDRESS: API_URL + "/addresses",

  CURRENTUSER: API_URL + "/currentUser",
  UPDATEUSER: API_URL + "/users",

  CATEGORY: API_URL + "/categories",

  IMGPRODUCT: API_URL + "/images",

  ADDTOCART: API_URL + "/shops/addToShop",
  VIEWSHOP: API_URL + "/shops/",
  REMOVEPRODUCTSHOP: API_URL + "/shops/removeProductShop",
  CHECKOUT: API_URL + "/stripes/checkout",
};

export const API_FUNCTION = {
  categories: async () => {
    try {
      const res = await axios.get(API_ROUTE.CATEGORY);
      if (res.data.status === "success") {
        return res.data.data;
      } else {
        return res.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  },

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

  currentUser: async () => {
    try {
      const res = await axios.get(API_ROUTE.CURRENTUSER, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  addresses: async (id) => {
    try {
      const res = await axios.get(API_ROUTE.ADDRESS + `${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
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
