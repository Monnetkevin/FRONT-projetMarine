import React, { useState } from "react";
import { useGlobalContext } from "../../components/context/GlobalContext";
import { useAuth } from "../../components/context/LoginContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import ConfirmationSuppression from "../../components/utils/ConfirmationSupp";

function CommentDashboard() {
  const { user } = useAuth();

  const [modalConfirm, setModalConfirm] = useState(false);
  const [nameConfirm, setNameConfirm] = useState("");

  const { comments } = useGlobalContext();

  return (
    <>
      {user.role_id === 2 && (
        <div className="container-DBcomment">
          <div className="title">Validation Commentaire</div>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Message</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {comments.map(
                (comment) =>
                  comment.is_active === 0 && (
                    <tr key={comment.id}>
                      <td>{comment.first_name + " " + comment.last_name} </td>
                      <td>{comment.comment_content}</td>
                      <td className="action">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="action__icon"
                          onClick={() => {
                            setNameConfirm("valider");
                            setModalConfirm(true);
                          }}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="action__icon"
                          onClick={() => {
                            setNameConfirm("supprimer");
                            setModalConfirm(true);
                          }}
                        />

                        {modalConfirm && (
                          <ConfirmationSuppression
                            setModalConfirm={setModalConfirm}
                            nameConfirm={nameConfirm}
                            id={comment.id}
                          />
                        )}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CommentDashboard;
