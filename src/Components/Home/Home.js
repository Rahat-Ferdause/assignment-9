import React from "react";

const Home = () => {
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
      <button className="p-2 px-8 text-xl bg-red-600 rounded-md">
        See Review
      </button>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
