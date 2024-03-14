import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { API_IMG, API_ROUTE } from "../../utils/RouteApi";
import auth from "../auth/Token";

function FormProductComment({ id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const avatar = auth.getAvatar();

  const addComment = async (data) => {
    try {
      await axios.post(API_ROUTE.COMMENT, data, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {auth.logged() && (
        <div className="container-formProductComment">
          <div className="formProductComment">
            <div className="formProductComment__img">
              <img src={API_IMG + avatar} alt={avatar} />
            </div>
            <div className="formProductComment__content">
              <form onSubmit={handleSubmit(addComment)}>
                <label htmlFor="comment">
                  Ajouter un commentaire sur le livre
                </label>
                <textarea
                  {...register("comment_content", {
                    required: "Contenu Obligatoire",
                  })}
                  rows={5}
                />
                {errors.comment_content && (
                  <div className="formProductComment__content__error">
                    <p>Contenu Obligatoire</p>
                  </div>
                )}
                <button
                  type="submit"
                  className="formProductComment__content__btn"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormProductComment;
