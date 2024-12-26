import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import { useLocation } from "react-router-dom";
import phonepayqr from "../assets/images/qrcode1.png";

const CheckoutPage = () => {
  // const total = useSelector((state) => state.packages.total);
  const location = useLocation();
  const { selectedPackages, total, quantities } = location.state;

  const [isFormVisible, setIsFormVisible] = useState(false);

  const packages = [
    {
      id: 1,
      name: "Hotel booking - 1200 per night (max-2 people)",
      price: 1200,
    },
    {
      id: 2,
      name: "North Goa Sightseeing - 350 per person",
      price: 350,
    },
    {
      id: 3,
      name: "South Goa Sightseeing - 350 per person",
      price: 350,
    },
    {
      id: 4,
      name: "Scuba Diving + water activities - 350 per person",
      price: 350,
    },
    {
      id: 5,
      name: "Dudhsagar Waterfall - 2500 per person",
      price: 2500,
    },
  ];

  // Get details for the selected packages
  const selectedPackageDetails = packages.filter((pkg) =>
    selectedPackages.includes(pkg.id)
  );

  const handleFormToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <Header />
      <TotalAmountBox total={total} />
      <div className="min-h-screen bg-blue-50">
        <div className="max-w-4xl mx-auto p-6 pt-20">
          <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">
            Checkout Details
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">
              Your Packages:
            </h2>
            {selectedPackageDetails.map((pkg) => (
              <div
                key={pkg.id}
                className="flex items-center justify-between mb-4 p-4 bg-teal-100 rounded-lg shadow-sm"
              >
                <div className="flex gap-5 items-center">
                  <h3 className="text-lg font-medium text-teal-700">
                    {pkg.name}
                  </h3>
                  <span className="text-teal-800 font-bold">
                    ₹{pkg.price} x {quantities[pkg.id]?.numberOfPeople || 1}
                  </span>
                </div>
              </div>
            ))}
            <div className="text-xl font-bold text-teal-800 mt-6 text-right">
              Total: ₹{total}
            </div>
            <div className="text-center mt-8">
              <button
                className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                onClick={handleFormToggle}
              >
                Proceed to Advance Booking - ₹500
              </button>
            </div>
          </div>
        </div>

        {/* Conditional Form Rendering */}
        {isFormVisible && (
          <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">
              Complete Your Booking
            </h2>
            <div className="flex gap-8 items-center flex-col md:flex-row ">
              {/* Left side: Form Inputs */}
              <div className="flex flex-col w-full md:w-1/2 gap-4">
                <label htmlFor="name" className="text-teal-700 font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your name"
                />

                <label htmlFor="phone" className="text-teal-700 font-semibold">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  className="border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Right side: QR Code */}
              <div className="flex justify-center items-center  w-full md:w-1/2 ">
                <img
                  src={phonepayqr}
                  alt="QR Code"
                  className="w-[100%] h-[400px] md:h-[400px] object-contain border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                onClick={() => alert("Booking Confirmed!")}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
