import React from "react";
import { API_IMG } from "../../utils/RouteApi";

function CardComment({ comment }) {
  return (
    <div className="cardComment">
      <div className="cardComment__img">
        <img
          src={API_IMG + `${comment.image_name}`}
          alt={comment.comment_content}
        />
      </div>
      <div className="cardComment__content">
        <div className="cardComment__content__title">
          <h5>
            Commentaire de {comment.first_name + " " + comment.last_name} sur
            {" " + comment.product_name} le {comment.created_at}
          </h5>
        </div>
        <div className="cardComment__content__text">
          <p>{comment.comment_content}</p>
        </div>
      </div>
    </div>
  );
}

export default CardComment;
