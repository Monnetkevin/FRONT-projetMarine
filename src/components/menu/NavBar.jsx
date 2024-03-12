import React, { useEffect, useState } from "react";
import UserDropdown from "./UserDropdown";
import auth from "../auth/Token";
import { useAuth } from "../context/LoginContext";

function NavBar() {
  const { isConnected } = useAuth();
  // const [isAuthenticated, setIsAuthenticated] = useState(isConnected);

  // useEffect(() => {
  //   if (isConnected === true) {
  //     console.log(isConnected);
  //     setIsAuthenticated(isConnected);

  //     console.log("caca", isAuthenticated);
  //   }
  // }, [isConnected]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left-section">
          <a href="/" className="left-section__logo">
            <span className="left-section__logo__brand-name">
              MATISSE Marine
            </span>
          </a>
        </div>
        <div className="middle-section">
          <div className="middle-section__nav-links">
            <ul>
              <li>
                <a href="/" className="active">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/boutique">Boutique</a>
              </li>
              <li>
                <a href="/evenement">Evenement</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-section">
          {auth.logged() ? (
            <UserDropdown />
          ) : (
            <div className="connexion-links">
              <ul>
                <li>
                  <a href="/connexion">Connexion</a>
                </li>
                <li>
                  <a href="/inscription">Inscription</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
