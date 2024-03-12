import React, { useState, useEffect, useRef } from "react";
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
      <button className="dropdown-btn" onClick={toggleDropdown}>
        <FontAwesomeIcon
          className="dropdown-btn__icon-user"
          icon={faCircleUser}
          size="2xl"
        />
      </button>
      <div
        className={`dropdown-content ${showDropdown ? "show-dropdown" : ""}`}
        ref={dropdownRef}
      >
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/profil">Profil</a>
          </li>
          <li>
            <a href="/deconnexion">Déconnexion</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;
