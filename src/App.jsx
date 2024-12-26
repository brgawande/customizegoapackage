import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SouthGoaPageDetails from "./pages/SouthGoaPageDetails";
import NorthGoaPageDetails from "./pages/NorthGoaPageDetails";
import ScubaDivingPageDetails from "./pages/ScubaDivingPageDetails";
import HotelPageDetails from "./pages/HotelPageDetails";
import DinnerCruisePageDetails from "./pages/DinnerCruisePageDetails";
import DhudSagarPageDetails from "./pages/DhudSagarPageDetails";
import CheckoutPage from "./pages/CheckoutPage";
import { useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/southgoa" element={<SouthGoaPageDetails />} />
        <Route path="/northgoa" element={<NorthGoaPageDetails />} />
        <Route path="/scubadiving" element={<ScubaDivingPageDetails />} />
        <Route path="/hotel" element={<HotelPageDetails />} />
        <Route path="/dinnercruise" element={<DinnerCruisePageDetails />} />
        <Route path="/dudhsagar" element={<DhudSagarPageDetails />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
