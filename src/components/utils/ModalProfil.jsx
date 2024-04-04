import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import auth from "../../components/auth/Token";
import axios from "axios";
import { API_ROUTE } from "../../utils/RouteApi";
import { useForm } from "react-hook-form";
import Toast from "../../utils/Toast";
import { useAuth } from "../context/LoginContext";

const ModalProfil = ({ isOpen, onClose, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [currentUser, setCurrentUser] = useState([]);
  const { setIsConnected, setUser } = useAuth();

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const getChange = (name) => {
    return (event) => {
      setCurrentUser({ ...currentUser, [name]: event.target.value });
    };
  };

  const updateUser = async (data) => {
    const request = {
      ...data,
      image_name: data.image_name[0],
      _method: "PATCH",
    };
    try {
      const res = await axios.post(
        API_ROUTE.UPDATEUSER + `${user.id}`,
        request,
        {
          headers: {
            Authorization: "Bearer" + auth.getToken(),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data.status === "success") {
        Toast.toastSuccess(res.data.message);
        setIsConnected(false);
        setUser(currentUser);
        onClose();
        reset();
      } else {
        Toast.toastError(res.data.message);
      }
    } catch (error) {
      Toast.toastError("erreur");
      console.log(error);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="first_name">Nom :</label>
        <input
          {...register("first_name", {
            required: "Nom obligatoire",
            minLength: {
              value: 3,
              message: "Minimum de 3 caractères",
            },
            maxLength: {
              value: 50,
              message: "Maximum de 50 caractères",
            },
          })}
          value={currentUser.first_name}
          onChange={getChange("first_name")}
          type="text"
        />
        {errors.first_name && (
          <div className="productAdd__error">
            <p>{errors.first_name.message}</p>
          </div>
        )}

        <label htmlFor="last_name"> Prénom :</label>
        <input
          {...register("last_name", {
            required: "Prénom obligatoire",
            minLength: {
              value: 3,
              message: "Minimum de 3 caractères",
            },
            maxLength: {
              value: 50,
              message: "Maximum de 50 caractères",
            },
          })}
          value={currentUser.last_name}
          onChange={getChange("last_name")}
          type="text"
        />
        {errors.last_name && (
          <div className="productAdd__error">
            <p>{errors.last_name.message}</p>
          </div>
        )}

        <label htmlFor="email"> Email :</label>
        <input
          {...register("email", {
            required: "Email obligatoire",
          })}
          value={currentUser.email}
          onChange={getChange("email")}
          type="email"
        />
        {errors.email && (
          <div className="productAdd__error">
            <p>{errors.email.message}</p>
          </div>
        )}

        <label htmlFor="phone_number"> Téléphone :</label>
        <input
          {...register("phone_number", {
            required: "Numéro de téléphone obligatoire",
            maxLength: {
              value: 11,
              message: "Numéro de téléphone incorrect",
            },
            minLength: {
              value: 9,
              message: "Numéro de téléphone incorrect",
            },
          })}
          value={currentUser.phone_number}
          onChange={getChange("phone_number")}
          type="text"
        />
        {errors.phone_number && (
          <div className="productAdd__error">
            <p>{errors.phone_number.message}</p>
          </div>
        )}

        <label htmlFor="image_name"> Image :</label>
        <input
          {...register("image_name")}
          onChange={getChange("image_name")}
          type="file"
          accept="image/*"
        />

        <button type="submit" className="modal__btn">
          Valider
        </button>
      </form>
    </Modal>
  );
};

export default ModalProfil;
