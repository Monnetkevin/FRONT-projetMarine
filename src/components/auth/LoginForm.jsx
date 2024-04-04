import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_ROUTE } from "../../utils/RouteApi";
import auth from "../auth/Token";
import { useAuth } from "../context/LoginContext";
import { toast } from "react-toastify";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const login = async (data) => {
    try {
      const res = await axios.post(API_ROUTE.LOGIN, data);

      if (res.data.meta.status === "success") {
        localStorage.setItem("access_token", res.data.data.access_token.token);
        setToken(auth.getToken());
        toast.success(res.data.meta.message);
        navigate("/");
      } else {
        toast.error(res.data.meta.message);
      }
    } catch (error) {
      toast.error("erreur");
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
