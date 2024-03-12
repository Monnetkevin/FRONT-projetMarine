import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_ROUTE } from "../../utils/RouteApi";
import auth from "../auth/Token";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const res = await axios.post(API_ROUTE.LOGIN, data);
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.data.access_token.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!auth.logged() && (
        <div className="login-form">
          <form onSubmit={handleSubmit(login)}>
            <label htmlFor="email">Email :</label>
            <input
              {...register("email", { required: "Email Obligatoire" })}
              type="email"
            />
            {errors.email && (
              <div className="login-form__error">
                <p>Email Obligatoire</p>
              </div>
            )}

            <label htmlFor="password">Mot de passe :</label>
            <input
              {...register("password", {
                required: "Mot de passe Obligatoire",
              })}
              type="password"
            />
            {errors.email && (
              <div className="login-form__error">
                <p>Mot de passe Obligatoire</p>
              </div>
            )}
            <button className="login-form__button" type="submit">
              Connexion
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginForm;