import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import CardComment from "./CardComment";

function ListComment({ three, id }) {
  const { comments } = useGlobalContext();
  const threeComments = comments.slice(-4);

  const commentFindProduct = comments.filter(
    (comment) => comment.product_id === id
  );
  console.log(id);
  console.log("caca", comments);
  console.log("pipi", commentFindProduct);

  return (
    <div className="list-cardComment">
      {three === "three"
        ? threeComments.map((comment) => (
            <CardComment key={comment.id} comment={comment} />
          ))
        : commentFindProduct.map((comment) => (
            <CardComment key={comment.id} comment={comment} />
          ))}
    </div>
  );
}

export default ListComment;
