import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";

const SouthGoaPageDetails = () => {
  const total = useSelector((state) => state.packages.total);
  return (
    <div>
      <Header />
      <TotalAmountBox total={total} />
    </div>
  );
};

export default SouthGoaPageDetails;
