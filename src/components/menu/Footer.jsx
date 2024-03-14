import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p> © 2023 - MATISSE Marine</p>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/marine.matisse.auteureFF">
          <FontAwesomeIcon
            icon={faFacebookF}
            size="2xl"
            className="footer-social__icon"
          />
        </a>
        <a href="https://www.instagram.com/marine.matisse/">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            className="footer-social__icon"
          />
        </a>
        <a href="https://www.tiktok.com/@marinematisse">
          <FontAwesomeIcon
            icon={faTiktok}
            size="2xl"
            className="footer-social__icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
