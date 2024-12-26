import React, { useState } from "react";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotal,
  setSelectedPackages,
  setQuantities,
} from "../store/packageSlice";

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
      price: 1200,
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
      price: 350,
      hasQuantity: true,
      quantityKey: "numberOfPeople",
      link: "scubadiving",
    },
    {
      id: 5,
      name: "Dudhsagar Waterfall - 2500 per person",
      price: 2500,
      hasQuantity: true,
      quantityKey: "numberOfPeople",
      link: "dudhsagar",
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
    <div className="min-h-screen bg-blue-50">
      <Header />
      <TotalAmountBox total={total} />
      <div className="max-w-4xl mx-auto p-6 pt-20">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">
          Plan Your Dream Trip to Goa!
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <form>
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex items-center justify-between mb-4 p-4 bg-teal-100 rounded-lg shadow-sm"
              >
                <div className="flex gap-5 items-center">
                  <h2 className="text-lg font-medium text-teal-700">
                    {pkg.name}
                  </h2>
                  {pkg.hasQuantity && (
                    <select
                      className="mt-2 border border-gray-300 rounded px-2 py-1"
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
                  )}
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-teal-500 underline mr-4"
                    onClick={() => handleViewDetails(pkg?.link)}
                  >
                    View Details
                  </button>
                  <span className="text-teal-800 font-bold mr-4">
                    ₹{pkg.price}
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
              className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
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
