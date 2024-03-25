import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function UserDropdown() {
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
            <Link className="dropdown-content__link" to="/deconnexion">
              Déconnexion
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;
