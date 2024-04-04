import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { API_IMG, API_ROUTE } from "../../utils/RouteApi";
import auth from "../auth/Token";
import { useAuth } from "../context/LoginContext";
import { useGlobalContext } from "../context/GlobalContext";
import Toast from "../../utils/Toast";

function FormProductComment({ id }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user, isConnected } = useAuth();
  const { setComments, comments, setIsLoaded } = useGlobalContext();

  const addComment = async (data) => {
    try {
      const request = { ...data, product_id: id };
      const res = await axios.post(API_ROUTE.COMMENT, request, {
        headers: {
          Authorization: "Bearer" + auth.getToken(),
        },
      });
      if (res.data.status === "success") {
        const updateComment = comments.map((comment) =>
          comment.id === res.data.data.id ? res.data.data : comment
        );
        setComments(updateComment);
        setIsLoaded(false);
        Toast.toastSuccess(res.data.message);
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
    <>
      {isConnected ? (
        <div className="container-formProductComment">
          <div className="formProductComment">
            <div className="formProductComment__img">
              <img src={API_IMG + user.image_name} alt={user.image_name} />
            </div>
            <div className="formProductComment__content">
              <form onSubmit={handleSubmit(addComment)}>
                <label htmlFor="comment">
                  Ajouter un commentaire sur le livre
                </label>
                <textarea
                  {...register("comment_content", {
                    required: "Contenu Obligatoire",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 caractères",
                    },
                  })}
                  rows={5}
                />
                {errors.comment_content && (
                  <div className="formProductComment__content__error">
                    {errors.comment_content.message}
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
      ) : (
        <div className="formProductComment__commentLogin">
          <p>Si tu souhaites mettre un commentaire, connecte-toi !</p>
        </div>
      )}
    </>
  );
}

export default FormProductComment;
