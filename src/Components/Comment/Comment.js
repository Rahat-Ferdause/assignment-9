import React from "react";

const Comment = (props) => {
  const { name, comment, mark } = props.Review;
  return (
    <div className="bg-orange-400 m-4 w-auto	gap-4">
      <div>
        <h2>Name: {name}</h2>
        <h4>Ratting: {mark}</h4>
        <h4>Review: {comment}</h4>
      </div>
    </div>
  );
};

export default Comment;
