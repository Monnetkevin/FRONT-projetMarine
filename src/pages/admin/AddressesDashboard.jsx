import React, { useEffect, useState } from "react";
import { API_FUNCTION } from "../../utils/RouteApi";
import ModalAddress from "../../components/utils/ModalAddress";

function AddressesDashboard({ id, isOpen, onClose, openModal }) {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    API_FUNCTION.addresses(id).then((res) => setAddresses(res));
  }, [id]);

  return (
    <>
      {addresses.length >= 1 ? (
        addresses.map((address) => (
          <div className="currentAdresse__address">
            <h5>{address.address_name}</h5>
            <label htmlFor="first_name">
              <b>Adresse :</b> {address.address}
            </label>
            <label htmlFor="first_name">
              <b>Code postal :</b>
              {address.postal_code}
            </label>
            <label htmlFor="first_name">
              <b>ville :</b>
              {address.city}
            </label>
            <label htmlFor="first_name">
              <b>Pays :</b>
              {address.country}
            </label>
            <button onClick={openModal} className="profil__content__form__btn">
              Modifier
            </button>
            <ModalAddress
              isOpen={isOpen}
              onClose={onClose}
              address={addresses}
            ></ModalAddress>
          </div>
        ))
      ) : (
        <div>
          <p>Pas d'adresse, vous souhaitez en ajouter une ?</p>
          <button>Ajouter</button>
        </div>
      )}
    </>
  );
}

export default AddressesDashboard;
