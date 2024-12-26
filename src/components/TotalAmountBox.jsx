import React from "react";

const TotalAmountBox = ({ total }) => {
  return (
    <div className="shadow-2xl">
      <div className="bg-red-800 text-white fixed shadow-md py-2 px-6 rounded-md top-5 md:top-8 right-5 md:right-10">
        <h1 className="font-bold text-2xl">Total : {total} ₹</h1>
      </div>
    </div>
  );
};

export default TotalAmountBox;
