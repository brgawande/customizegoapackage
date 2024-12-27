import React from "react";

const SinglePriceBox = ({ heading }) => {
  return (
    <div className="shadow-2xl fixed top-20 md:top-10 left-1/2 w-[60%] md:w-auto transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-[#f6ff00] text-black shadow-md py-2 px-6 rounded-md">
        <h1 className="font-bold text-md md:text-2xl">{heading}</h1>
      </div>
    </div>
  );
};

export default SinglePriceBox;
