import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";

import { useAuth } from "../context/LoginContext";

function NavBar() {
  const { token } = useAuth();

  const toggleMenu = () => {
    // const navButton = document.querySelector(".nav-button");
    // const menuTop = document.querySelector(".menu-top");
    // navButton.addEventListener("click", () => {
    //   navButton.classList.toggle("active");
    //   menuTop.classList.toggle("active");
    // });
  };
  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="menu">
        <div className="brandname">MATISSE Marine</div>
        <ul>
          <li>
            <Link to="/" className="active">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/boutique">Boutique</Link>
          </li>
          <li>
            <Link to="/evenement">Evenement</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {token ? (
          <UserDropdown />
        ) : (
          <ul>
            <li>
              <Link to="/connexion">Connexion</Link>
            </li>
            <li>
              <Link to="/inscription">Inscription</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
