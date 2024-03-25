import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import CardComment from "./CardComment";

function ListComment({ three, id }) {
  const { comments } = useGlobalContext();
  const threeComments = comments.slice(-4);

  return (
    <div className="list-cardComment">
      {three === "three" ? (
        threeComments.map((comment) => (
          <CardComment key={comment.id} comment={comment} />
        ))
      ) : comments.length > 0 ? (
        comments.map(
          (comment) =>
            comment.product_id === Number(id) && (
              <CardComment key={comment.id} comment={comment} />
            )
        )
      ) : (
        <div className="list-cardComment__noComment">
          <p>Pas de commentaire, sur ce livre</p>
        </div>
      )}
    </div>
  );
}

export default ListComment;
