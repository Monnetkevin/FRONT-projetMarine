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
  // Check si le token est valide et n'a pas expiré
  if (getDecodedToken() && !(getDecodedToken().exp * 1000 < Date.now())) {
    return true;
  } else {
    return localStorage.removeItem("access_token");
  }
};

const getRoles = () => {
  // On teste si il y a un token décodé et si il n'a pas expiré
  if (getExpiryTime()) {
    // la valeur de base est un tableau dans un string, on le parse pour faire sauter le string et
    // on le tostring pour faire sauter le tableau, comme ça on a seulement la valeur
    return getDecodedToken().role.role_name;
  } else {
    return false;
  }
};

const getEmail = () => {
  // On teste si il y a un token décodé et si il n'a pas expiré
  if (getExpiryTime()) {
    return getDecodedToken().email;
  } else {
    return false;
  }
};
const getAvatar = () => {
  // On teste si il y a un token décodé et si il n'a pas expiré
  if (getExpiryTime()) {
    return getDecodedToken().avatar;
  } else {
    return false;
  }
};

const loggedAndAdmin = () => {
  // Check si il y a un token valide et check si le rôle est celui d'un admin, répond true quand c'est vrai
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
};
