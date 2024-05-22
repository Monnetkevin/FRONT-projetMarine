import React, { useState } from "react";
import { API_IMG } from "../../utils/RouteApi";
import ModalProfil from "../../components/utils/ModalProfil";
import { useAuth } from "../../components/context/LoginContext";
import AddressesDashboard from "./AddressesDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faMailBulk,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function ProfilDashboard() {
  const { user, token } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressVisible, setAddressVisible] = useState(false);

  // start modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  // end modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleAddresses = () => {
    setAddressVisible(!addressVisible);
  };

  return (
    <div className="container-profil">
      {token ? (
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
                <FontAwesomeIcon
                  icon={faUser}
                  className="profil__content__form__icon"
                />
                <b>Nom :</b>
                {user.first_name}
              </label>

              <label htmlFor="last_name">
                <FontAwesomeIcon
                  icon={faUser}
                  className="profil__content__form__icon"
                />
                <b>Prénom :</b>
                {user.last_name}
              </label>

              <label htmlFor="email">
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="profil__content__form__icon"
                />
                <b>Email :</b>
                {user.email}
              </label>

              <label htmlFor="phone_number">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="profil__content__form__icon"
                />
                <b>Téléphone :</b>
                {user.phone_number}
              </label>

              <div className="container-addresses">
                <div className="container-addresses__icon">
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className="profil__content__form__icon"
                  />
                  <p>Afficher et modifier les adresses</p>
                </div>

                <div className="currentAdresse">
                  {addressVisible && (
                    <AddressesDashboard
                      id={user.id}
                      isOpen={isModalOpen}
                      onClose={closeModal}
                      openModal={openModal}
                    />
                  )}
                </div>
                <button
                  className="container-addresses__btn"
                  onClick={toggleAddresses}
                >
                  Afficher
                </button>
              </div>

              <button
                className="profil__content__form__btn"
                onClick={openModal}
              >
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
      ) : (
        <p>Chargement</p>
      )}
    </div>
  );
}

export default ProfilDashboard;
