import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import auth from "../../components/auth/Token";
import axios from "axios";
import { API_ROUTE } from "../../utils/RouteApi";
import { useForm } from "react-hook-form";

const ModalProfil = ({ isOpen, onClose, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const getHandler = (name) => {
    return (event) => {
      setCurrentUser({ ...currentUser, [name]: event.target.value });
    };
  };

  const updateUser = async (data) => {
    try {
      await axios.post(API_ROUTE.UPDATEUSER + `${user.id}`, data, {
        headers: {
          Authorization: "Bearer" + auth.getToken(),
        },
      });
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="first_name">Nom :</label>
        <input
          {...register("first_name", { required: "Nom obligatoire" })}
          value={currentUser.first_name}
          onChange={getHandler("first_name")}
          type="text"
        />
        {errors.first_name && (
          <div className="profil__content__form__error">
            <p>{errors.first_name.message}</p>
          </div>
        )}

        <label htmlFor="last_name"> Prénom :</label>
        <input
          {...register("last_name", {
            required: "Prénom obligatoire",
          })}
          value={currentUser.last_name}
          onChange={getHandler("last_name")}
          type="text"
        />
        {errors.last_name && (
          <div className="profil__content__form__error">
            <p>{errors.last_name.message}</p>
          </div>
        )}

        <label htmlFor="email"> Email :</label>
        <input
          {...register("email", {
            required: "Email obligatoire et unique",
          })}
          value={currentUser.email}
          onChange={getHandler("email")}
          type="email"
        />
        {errors.email && (
          <div className="profil__content__form__error">
            <p>{errors.email.message}</p>
          </div>
        )}

        <label htmlFor="phone_number"> Téléphone :</label>
        <input
          {...register("phone_number", {
            required: "Téléphone obligatoire",
          })}
          value={currentUser.phone_number}
          onChange={getHandler("phone_number")}
          type="text"
        />
        {errors.phone_number && (
          <div className="profil__content__form__error">
            <p>{errors.phone_number.message}</p>
          </div>
        )}

        <label htmlFor=""> Image :</label>
        <input
          {...register("image_name", {
            required: "Image obligatoire",
          })}
          onChange={getHandler("image_name")}
          type="file"
          accept="image/*"
        />
        {errors.image_name && (
          <div className="profil__content__form__error">
            <p>{errors.image_name.message}</p>
          </div>
        )}
      </form>
      <button type="submit" className="modal__btn">
        Valider
      </button>
    </Modal>
  );
};

export default ModalProfil;
