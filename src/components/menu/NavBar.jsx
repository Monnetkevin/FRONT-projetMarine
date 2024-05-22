import React from "react";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";

import { useAuth } from "../context/LoginContext";

function NavBar() {
  const { token } = useAuth();

  return (
    <nav className="navbar">
      <div className="left-section">
        <Link to="/" className="left-section__logo">
          <div className="left-section__logo__brand-name">MATISSE Marine</div>
        </Link>
      </div>
      <div className="middle-section">
        <div className="middle-section__nav-links">
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
        </div>
      </div>
      <div className="right-section">
        {token ? (
          <UserDropdown />
        ) : (
          <div className="connexion-links">
            <ul>
              <li>
                <Link to="/connexion">Connexion</Link>
              </li>
              <li>
                <Link to="/inscription">Inscription</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
