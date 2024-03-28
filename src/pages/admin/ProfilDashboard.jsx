import React, { useState } from "react";
import { API_IMG } from "../../utils/RouteApi";

import ModalProfil from "../../components/utils/ModalProfil";
import { useAuth } from "../../components/context/LoginContext";

function ProfilDashboard() {
  const { user } = useAuth();
  const [adresses, setAdresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // start modal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // end modal

  return (
    <div className="container-profil">
      <div className="profil">
        <div className="profil__header">
          <img
            src={API_IMG + `${user.image_name}`}
            alt={user.first_name + " " + user.last_name}
          />
          <p>Bonjour, {user.first_name + " " + user.last_name}</p>
        </div>
        <div className="profil__content">
          <div className="profil__content__form">
            <label htmlFor="first_name">
              <b>Nom :</b> {user.first_name}
            </label>
            <label htmlFor="last_name">
              <b>Prénom :</b> {user.last_name}
            </label>
            <label htmlFor="email">
              <b>Email :</b> {user.email}
            </label>
            <label htmlFor="phone_number">
              <b> Téléphone :</b> {user.phone_number}
            </label>
            <label htmlFor="">Vous avez </label>

            <button className="profil__content__form__btn" onClick={openModal}>
              Modifier
            </button>

            <ModalProfil
              isOpen={isModalOpen}
              onClose={closeModal}
              user={user}
            ></ModalProfil>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilDashboard;
