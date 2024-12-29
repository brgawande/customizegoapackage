import React from "react";

const TotalAmountBox = ({ total }) => {
  return (
    <div
      style={{
        zIndex: 10, // Ensure it's above the glassmorphic effect
        position: "relative", // Create a stacking context for the component
      }}
      className="shadow-2xl z-50"
    >
      <div className="bg-[#f6ff00] text-black fixed shadow-md py-2 px-6 rounded-md top-5 md:top-8 right-5 md:right-10">
        <h1 className="font-bold text-2xl">Total : {total} ₹</h1>
      </div>
    </div>
  );
};

export default TotalAmountBox;
