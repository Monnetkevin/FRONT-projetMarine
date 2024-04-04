import { jwtDecode } from "jwt-decode";

function getToken() {
  return localStorage.getItem("access_token");
}

const getDecodedToken = () => {
  if (getToken()) {
    return jwtDecode(localStorage.getItem("access_token"));
  } else {
    return false;
  }
};

const getExpiryTime = () => {
  if (getDecodedToken() && !(getDecodedToken().exp * 1000 < Date.now())) {
    return localStorage.getItem("access_token");
  } else {
    return localStorage.removeItem("access_token");
  }
};

const getRoles = () => {
  if (getExpiryTime()) {
    return getDecodedToken().role.role_name;
  } else {
    return false;
  }
};

const getEmail = () => {
  if (getExpiryTime()) {
    return getDecodedToken().email;
  } else {
    return false;
  }
};
const getAvatar = () => {
  if (getExpiryTime()) {
    return getDecodedToken().avatar;
  } else {
    return false;
  }
};

const loggedAndAdmin = () => {
  return !!(getExpiryTime() && getRoles() === "admin");
};
const logged = () => {
  return !!(getExpiryTime() && getRoles() !== null);
};

export default {
  loggedAndAdmin,
  getExpiryTime,
  getEmail,
  getAvatar,
  logged,
  getDecodedToken,
  getToken,
};
