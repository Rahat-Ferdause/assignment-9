import { comment } from "postcss";
import React from "react";
import Comment from "../Comment/Comment";

const Review = () => {
  const Reviews = [
    { id: 1, name: "Ema John", comment: "Nice Agency", mark: "4.5/5" },
    {
      id: 2,
      name: "Leonardo-Decaprio",
      comment: "Nice Service",
      mark: "4.2/5",
    },
    {
      id: 3,
      name: "Ema Watson",
      comment: "Short Time processing",
      mark: "4.4/5",
    },
    { id: 4, name: "Angelina Jolie", comment: "Good Behaviour", mark: "4.7/5" },
    {
      id: 5,
      name: "Dwayane Johnson",
      comment: "Best Ever Service",
      mark: "4.2/5",
    },
    { id: 6, name: "Vin Diesel", comment: "Although Good", mark: "4.0/5" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold	italic m-4">Review Page: {Reviews.length}</h1>
      <div>
      {Reviews.map((Review) => (
        <Comment key={Review.id} Review={Review}></Comment>
      ))}
      </div>
    </div>
  );
};

export default Review;
