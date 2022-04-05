import React from "react";
import { useNavigate } from "react-router-dom";
import HomeReview from "../HomeReview/HomeReview";

const Home = () => {
  const HomeReviews = [
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
  ];
  const navigate = useNavigate();
  const showReview = () => {
    navigate("/Review");
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="mt-10 p-6">
          <h1 className="text-3xl font-bold	italic m-4">
            Your First Destination to Travel
          </h1>
          <p>
            TourTravelWorld.com is the right place to get in touch with tour
            operators in Khulna, who can customize tour packages for you as per
            your requirements. Travel agents in Khulna can facilitate your trip
            to the city by also providing effective local advice at reasonable
            charges. We have a strong network of travel agency in Khulna that
            you can easily connect with, and plan your trip for a hassle-free
            experience. These tour operators in Khulna have a long-standing in
            the travel industry, and they are known for providing Khulna tour
            package that is comprehensive, professional, and affordable. Simply
            send your requirement to Khulna travel agents for getting the best
            quote.
          </p>
        </div>
        <div className="p-6">
          <img
            className="mt-10 h-48 w-full"
            src="/src/Components/img/img.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <button
        onClick={showReview}
        className="p-2 px-8 text-xl bg-red-600 rounded-md"
      >
        See Review
      </button>
      <div>
        <h1 className="text-2xl">At a Glance</h1>
        <div>
          {HomeReviews.map((Review) => (
            <HomeReview key={Review.id} Review={Review}></HomeReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
