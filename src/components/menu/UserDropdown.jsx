import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_ROUTE } from "../../utils/RouteApi";
import auth from "../auth/Token";
import { useAuth } from "../context/LoginContext";

function UserDropdown() {
  const { setIsConnected, token, setToken, setUser } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Fermer le menu déroulant si on clique en dehors de celui-ci

  const handleClickOutside = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const logout = async () => {
    if (token) {
      try {
        await axios.post(API_ROUTE.LOGOUT, null, {
          headers: {
            Authorization: "Bearer" + auth.getToken(),
          },
        });
        localStorage.removeItem("access_token");
        setToken(null);
        setUser(null);
        setIsConnected(false);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="auth-links">
      <div className="cart-btn">
        <FontAwesomeIcon
          className="cart-btn__icon-cart"
          icon={faCartShopping}
          size="lg"
        />
      </div>
      <button
        className="dropdown-btn"
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <FontAwesomeIcon
          className="dropdown-btn__icon-user"
          icon={faCircleUser}
          size="2xl"
        />
      </button>
      <div
        className={`dropdown-content ${
          showDropdown ? "auth-links__show-dropdown" : ""
        }`}
      >
        <ul>
          <li>
            <Link className="dropdown-content__link" to="/profil">
              Profil
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-content__link"
              onClick={() => {
                logout();
              }}
            >
              Déconnexion
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;
