import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import ocean from "../assets/images/ocean1.jpg";

const ScubaDivingPageDetails = () => {
  const total = useSelector((state) => state.packages.total);
  return (
    <div
      style={{
        backgroundImage: `url(${ocean})`, // Use the imported image in the background
        backgroundSize: "cover", // Ensure the image covers the full screen
        backgroundPosition: "center", // Center the image
      }}
      className="min-h-screen"
    >
      <Header />
      <TotalAmountBox total={total} />
    </div>
  );
};

export default ScubaDivingPageDetails;
