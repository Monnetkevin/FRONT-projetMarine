import React from "react";
import Header from "../components/menu/Header";
import Separator from "../components/utils/Separator";
import imgPresentation from "../assets/images/img_presentation_.png";
import ListProduct from "../components/product/ListProduct";

function Home() {
  return (
    <div className="container-home">
      <Header
        title="Bienvenue"
        text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, contenu n'en soit"
      />
      <Separator>Présentation</Separator>
      <div className="presentation-home">
        <div className="presentation-home__img">
          <img src={imgPresentation} alt="Image de MATISSE Marine" />
        </div>
        <div className="presentation-home__text">
          <h5>Qui suis-je :</h5>
          <p>
            ontrairement à une opinion répandue, le Lorem Ipsum n'est pas
            simplement du texte aléatoire. Il trouve ses racines dans une oeuvre
            de la littérature latine classique datant de 45 av. J.-C.,
          </p>
          <h5>Ce que j'écris :</h5>
          <p>
            ontrairement à une opinion répandue, le Lorem Ipsum n'est pas
            simplement du texte aléatoire. Il trouve ses racines dans une oeuvre
            de la littérature latine classique datant de 45 av. J.-C.,
          </p>
        </div>
      </div>
      <Separator>Les derniers Ajouts</Separator>
      <ListProduct />
    </div>
  );
}

export default Home;
