import React, { useState } from "react";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotal,
  setSelectedPackages,
  setQuantities,
} from "../store/packageSlice";
import ocean from "../assets/images/ocean1.jpg";

const Home = () => {
  const total = useSelector((state) => state.packages.total);
  const selectedPackages = useSelector(
    (state) => state.packages.selectedPackages
  );
  const quantities = useSelector((state) => state.packages.quantities);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      name: "Hotel booking - 1200 per night (max-2 people)",
      price: 2000,
      hasQuantity: true,
      quantityKey: "numberOfPeople",
      link: "hotel",
    },
    {
      id: 2,
      name: "North Goa Sightseeing - 350 per person",
      price: 350,
      hasQuantity: true,
      quantityKey: "numberOfPeople",
      link: "northgoa",
    },
    {
      id: 3,
      name: "South Goa Sightseeing - 350 per person",
      price: 350,
      hasQuantity: true,
      quantityKey: "numberOfPeople",
      link: "southgoa",
    },
    {
      id: 4,
      name: "Scuba Diving + water activities - 350 per person",
      price: 1500,
      hasQuantity: true,
      quantityKey: "numberOfPeople",
      link: "scubadiving",
    },
    {
      id: 5,
      name: "Dudhsagar Waterfall - 2500 per person",
      price: 2000,
      hasQuantity: true,
      quantityKey: "numberOfPeople",
      link: "dudhsagar",
    },
    {
      id: 6,
      name: "Dinner Cruise - 1200 per person",
      price: 1200,
      hasQuantity: true,
      quantityKey: "numberOfPeople",
      link: "dinnercruise",
    },
  ];

  const handleSelection = (pkg) => {
    const { id, price, hasQuantity, quantityKey } = pkg;
    const quantity = hasQuantity ? quantities[id]?.[quantityKey] || 1 : 1;
    const packagePrice = price * quantity;

    let updatedSelectedPackages;
    if (selectedPackages.includes(id)) {
      updatedSelectedPackages = selectedPackages.filter(
        (packageId) => packageId !== id
      );
      dispatch(setTotal(total - packagePrice)); // Update total after removal
    } else {
      updatedSelectedPackages = [...selectedPackages, id];
      dispatch(setTotal(total + packagePrice)); // Update total after addition
    }

    dispatch(setSelectedPackages(updatedSelectedPackages)); // Update selected packages
  };

  const handleQuantityChange = (pkg, value) => {
    const { id, price, hasQuantity, quantityKey } = pkg;
    const quantity = parseInt(value, 10) || 1;

    const updatedQuantities = {
      ...quantities,
      [id]: { [quantityKey]: quantity },
    };
    dispatch(setQuantities(updatedQuantities)); // Update quantities

    if (selectedPackages.includes(id)) {
      const prevQuantity = quantities[id]?.[quantityKey] || 1;
      const priceDifference = (quantity - prevQuantity) * price;
      dispatch(setTotal(total + priceDifference)); // Update total based on quantity change
    }
  };

  const handleViewDetails = (pkgId) => {
    navigate(`/${pkgId}`);
  };

  const handleCheckout = () => {
    // Redirect to checkout with the selected packages and total
    navigate("/checkout", {
      state: {
        selectedPackages,
        total,
        quantities,
      },
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D")`, // Corrected syntax
        backgroundSize: "cover", // Ensure the image covers the full screen
        backgroundPosition: "center", // Center the image
      }}
      className="min-h-screen bg-blue-50 z-0"
    >
      <Header />
      <TotalAmountBox total={total} />
      <div className="max-w-4xl mx-auto p-6 pt-[70px] md:pt-10">
        <div
          style={{
            backdropFilter: "blur(30px)", // Apply blur effect
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
            border: "1px solid rgba(255, 255, 255, 0.2)", // Optional border for glass effect
          }}
          className="rounded-lg shadow-md p-6"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-center  text-[#008490] mb-6 ">
            Plan Your Dream Trip to Goa!
          </h1>
          <form>
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col md:flex-row items-center justify-between mb-6 p-4 bg-[#008490] rounded-lg shadow-sm"
              >
                <div className=" flex gap-2">
                  <div className=" mb-4 md:mb-0">
                    <h2 className="text-lg font-medium text-white">
                      {pkg.name}
                    </h2>
                  </div>
                  {pkg.hasQuantity && (
                    <div className="flex flex-col md:flex-row gap-4 items-center mb-4 md:mb-0">
                      <select
                        className="border border-gray-300 rounded px-1 md:px-3 py-1 text-teal-700 font-medium w-[45px] md:w-auto"
                        value={quantities[pkg.id]?.[pkg.quantityKey] || 1}
                        onChange={(e) =>
                          handleQuantityChange(pkg, e.target.value)
                        }
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-600 transition"
                    onClick={() => handleViewDetails(pkg?.link)}
                  >
                    Details
                  </button>
                  <span className="text-white font-bold">
                    ₹{pkg.price}
                    {pkg?.id === 1 ? " per Night" : "per person"}
                  </span>
                  <input
                    type="checkbox"
                    className="h-6 w-6 accent-teal-600"
                    checked={selectedPackages.includes(pkg.id)}
                    onChange={() => handleSelection(pkg)}
                  />
                </div>
              </div>
            ))}
          </form>
          <div className="text-center mt-8">
            <button
              className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 w-full md:w-auto"
              onClick={handleCheckout}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
