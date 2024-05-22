import React from "react";
import Header from "../components/menu/Header";
import Separator from "../components/utils/Separator";
import imgPresentation from "../assets/images/img_presentation_.png";
import ListProduct from "../components/product/ListProduct";
import ListComment from "../components/comment/ListComment";

function Home() {
  const three = "three";
  return (
    <div className="container-home">
      <Header
        title="Bienvenue"
        text="Ici, vous retrouverez toute mon actualité, mes nouvelles sorties et mes dédicaces à venir. Vous pouvez aussi commander mes romans"
      />
      {/* <Separator>Présentation</Separator> */}
      <div className="presentation-home">
        <div className="presentation-home__img">
          <img src={imgPresentation} alt="Image de MATISSE Marine" />
        </div>
        <div className="presentation-home__text">
          <h5>Qui suis-je :</h5>
          <p>
            Divisée entre son métier d'auteure et son rôle de maman, Marine
            Matisse écrit quand ses enfants lui accordent assez de liberté,
            c'est à dire, quand ils dorment. Ses nuits sont rythmées par
            l'écriture et c'est dans ses rêves qu'elle puise l'inspiration.
            C'est après un songe qu'elle décide de conter l'histoire qu'elle y a
            vu, et c'est ainsi que naît son premier roman, La vie d'une
            audacieuse. S'en suit un deuxième puis un troisième tome, mais elle
            ne s'arrête pas là en décidant de faire de sa passion, un travail à
            plein temps.
          </p>
          <h5>Ce que j'écris :</h5>
          <p>
            J'écris de la romance lesbienne sous toutes ses formes. Dark,
            médiéval fantastique ou avec une pointe de magie, peu importe
            l'univers, l'amour est toujours présent.
          </p>
        </div>
      </div>
      <Separator>Les derniers Ajouts</Separator>
      <ListProduct />
      <Separator>Les derniers Commentaires</Separator>
      <ListComment three={three} />
    </div>
  );
}

export default Home;
