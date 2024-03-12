import React from "react";
import imgHeader from "../../assets/images/img_header.png";
import Button from "../../components/utils/ButtonHome";

function Header({ title, text }) {
  return (
    <header className="header-main">
      <div className="header-main__left">
        <h2>{title} </h2>
        <p>{text}</p>
        {title === "Bienvenue" && (
          <Button linkTo="/contact" size="large" color="primary">
            Contactez-moi
          </Button>
        )}
      </div>
      <div className="header-main__right">
        <img src={imgHeader} alt="Image principale de Matisse marine" />
      </div>
    </header>
  );
}

export default Header;
