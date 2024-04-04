import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_ROUTE } from "../../utils/RouteApi";
import Toast from "../../utils/Toast";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const registerSubmit = async (data) => {
    try {
      const res = await axios.post(API_ROUTE.REGISTER, data);

      if (res.data.status === "access") {
        Toast.toastSuccess(res.data.message);
        navigate("/connexion");
      } else {
        Toast.toastError(res.data.message);
      }
    } catch (error) {
      Toast.toastError("erreur");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="register-form">
        <form onSubmit={handleSubmit(registerSubmit)}>
          <label htmlFor="first_name">Nom :</label>
          <input
            {...register("first_name", { required: "Nom obligatoire" })}
            type="text"
          />
          {errors.first_name && (
            <div className="register-form__error">
              <p>Name Obligatoire</p>
            </div>
          )}

          <label htmlFor="last_name">Prénom :</label>
          <input
            {...register("last_name", { required: "Prenom obligatoire" })}
            type="text"
          />
          {errors.last_name && (
            <div className="register-form__error">
              <p>Prénom Obligatoire</p>
            </div>
          )}

          <label htmlFor="email">Email :</label>
          <input
            {...register("email", { required: "Email obligatoire" })}
            type="email"
          />
          {errors.email && (
            <div className="register-form__error">
              <p>Email Obligatoire</p>
            </div>
          )}

          <label htmlFor="password">Mot de passe :</label>
          <input
            {...register("password", { required: "mot de passe obligatoire" })}
            type="password"
          />
          {errors.password && (
            <div className="register-form__error">
              <p>mot de passe Obligatoire</p>
            </div>
          )}

          <label htmlFor="phone_number">Téléphone :</label>
          <input
            {...register("phone_number", {
              required: "Numéro de téléphone obligatoire",
            })}
            type="integer"
          />
          {errors.phone_number && (
            <div className="register-form__error">
              <p>Numéro de téléphone Obligatoire</p>
            </div>
          )}
          <button className="register-form__button" type="submit">
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
