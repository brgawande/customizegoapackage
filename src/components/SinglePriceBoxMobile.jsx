import React from "react";

const SinglePriceBoxMobile = ({ heading }) => {
  return (
    <div className="shadow-2xl fixed bottom-5 w-auto  left-[20%]  md:w-auto transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-[#f6ff00] text-black shadow-md py-2 px-4 rounded-md">
        <h1 className="font-bold text-md text-center">{heading}</h1>
      </div>
    </div>
  );
};

export default SinglePriceBoxMobile;
