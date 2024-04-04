import React from "react";
import { useGlobalContext } from "../../components/context/GlobalContext";
import auth from "../../components/auth/Token";
import axios from "axios";
import { API_ROUTE } from "../../utils/RouteApi";
import Toast from "../../utils/Toast";

function ConfirmationSuppression({ setModalConfirm, nameConfirm, id }) {
  const idComment = id;
  const { setComments } = useGlobalContext();

  const deleteComment = async (idComment) => {
    try {
      const res = await axios.delete(API_ROUTE.COMMENT + `${id}`, {
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
      });

      if (res.data.status === "success") {
        setComments((prev) => prev.filter((item) => item.id !== id));
        Toast.toastSuccess(res.data.message);
      } else {
        Toast.toastError(res.data.message);
      }
    } catch (error) {
      Toast.toastError("erreur");
      console.log(error);
    }
  };

  const ValidateComment = async (idComment) => {
    const data = { is_active: true };
    try {
      const res = await axios.put(API_ROUTE.COMMENT + `${id}`, data, {
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
      });
      if (res.data.status === "success") {
        setComments((prev) => prev.filter((item) => item.id !== id));
        Toast.toastSuccess(res.data.message);
      } else {
        Toast.toastError(res.data.message);
      }
    } catch (error) {
      Toast.toastError("erreur");
      console.log(error);
    }
  };

  const handleConfirmation = (id) => {
    setModalConfirm(false);
    if (nameConfirm === "valider") {
      ValidateComment(id);
    } else {
      deleteComment(id);
    }
  };

  return (
    <div className="confirmation-popup">
      <div className="confirmation-content">
        <p>Êtes-vous sûr de vouloir {nameConfirm} cet élément ?</p>
        <div className="confirmation-content__button-container">
          <button className="confirm-button" onClick={handleConfirmation}>
            Oui
          </button>
          <button
            className="cancel-button"
            onClick={() => setModalConfirm(false)}
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationSuppression;
