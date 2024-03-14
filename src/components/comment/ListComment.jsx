import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import CardComment from "./CardComment";

function ListComment() {
  const { comments } = useGlobalContext();
  const threeComments = comments.slice(-4);
  return (
    <div className="list-cardComment">
      {threeComments.map((comment) => (
        <CardComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default ListComment;
