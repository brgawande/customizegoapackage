import React, { useState } from "react";
import TotalAmountBox from "../components/TotalAmountBox";
import ProfitBox from "../components/ProfitBox";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotal,
  setProfit,
  setSelectedPackages,
  setQuantities,
} from "../store/packageSlice";

const Home = () => {
  const total = useSelector((state) => state.packages.total);
  const profit = useSelector((state) => state.packages.profit); // Get profit from Redux
  const selectedPackages = useSelector(
    (state) => state.packages.selectedPackages
  );
  const quantities = useSelector((state) => state.packages.quantities);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hotels = [
    { id: "hotel1", name: "Blossom Resort Candolim", price: 2100, profit: 200 },
    { id: "hotel2", name: "Shalom Indus Candolim", price: 2150, profit: 200 },
    { id: "hotel3", name: "De Falcon Candolim", price: 3100, profit: 200 },
    {
      id: "hotel4",
      name: "The Karishma Grand Calangute",
      price: 3700,
      profit: 200,
    },
  ];

  const apartments = [
    { id: "apartment1", name: "Apartment 1BHK", price: 2500, profit: 200 },
    { id: "apartment2", name: "Apartment 2BHK", price: 3500, profit: 200 },
  ];

  const guesthouse = [
    { id: "guesthouse1", name: "Guest House 1", price: 1700, profit: 200 },
    { id: "guesthouse2", name: "Guest House 2", price: 1500, profit: 200 },
  ];

  const pickthivim = [
    { id: "smallcar", name: "Swift", price: 3000, profit: 200 },
    { id: "ertiga", name: "Ertiga", price: 4000, profit: 200 },
    { id: "innova", name: "Innova", price: 4500, profit: 200 },
    { id: "traveller", name: "traveller", price: 5500, profit: 200 },
  ];

  const roomdecor = [
    {
      id: "honeymoonroom",
      name: "HoneyMoon Room Decoration",
      price: 2000,
      profit: 200,
    },
  ];

  const sightseeing = [
    {
      id: "northGoa",
      name: "North Goa Sightseeing",
      price: 350,
      profit: 200,
    },
    {
      id: "southGoa",
      name: "South Goa Sightseeing",
      price: 350,
      profit: 200,
    },
  ];

  const activities = [
    {
      id: "scuba",
      name: "Scuba Diving + Water Activities",
      price: 1500,
      profit: 200,
    },
    { id: "cruise", name: "Dinner Cruise", price: 1300, profit: 200 },
    { id: "dudhsagar", name: "Dudhsagar Waterfall", price: 2000, profit: 200 },
    { id: "bunjee", name: "Bunjee Jumping", price: 3500, profit: 200 },
  ];

  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (category) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleSelection = (pkg, quantityKey, quantity) => {
    const { id, price, profit: itemProfit } = pkg;
    const isSelected = selectedPackages.includes(id);
    const effectiveQuantity = quantity || 1;

    let updatedSelectedPackages;
    if (isSelected) {
      updatedSelectedPackages = selectedPackages.filter(
        (packageId) => packageId !== id
      );
      dispatch(setTotal(total - price * effectiveQuantity));
      dispatch(setProfit(profit - itemProfit * effectiveQuantity));
    } else {
      updatedSelectedPackages = [...selectedPackages, id];
      dispatch(setTotal(total + price * effectiveQuantity));
      dispatch(setProfit(profit + itemProfit * effectiveQuantity));
    }

    dispatch(setSelectedPackages(updatedSelectedPackages));

    const updatedQuantities = {
      ...quantities,
      [id]: { [quantityKey]: effectiveQuantity },
    };
    dispatch(setQuantities(updatedQuantities));
  };

  const handleQuantityChange = (pkg, quantityKey, value) => {
    const { id, price, profit: itemProfit } = pkg;
    const quantity = parseInt(value, 10) || 1;
    const prevQuantity = quantities[id]?.[quantityKey] || 1;

    const updatedQuantities = {
      ...quantities,
      [id]: { [quantityKey]: quantity },
    };
    dispatch(setQuantities(updatedQuantities));

    if (selectedPackages.includes(id)) {
      const priceDifference = (quantity - prevQuantity) * price;
      const profitDifference = (quantity - prevQuantity) * itemProfit;
      dispatch(setTotal(total + priceDifference));
      dispatch(setProfit(profit + profitDifference));
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen bg-blue-50 z-0"
    >
      <TotalAmountBox total={total} />
      <ProfitBox profit={profit} />
      <div className="max-w-4xl mx-auto p-6 pt-[70px] md:pt-10">
        <div className="rounded-lg shadow-md p-6 bg-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Plan Your Dream Trip to Goa!
          </h1>
          <div className="space-y-6">
            {/* Dropdown Sections */}
            {[
              {
                category: "Hotel Booking",
                items: hotels,
                quantityKey: "nights",
              },
              {
                category: "Apartments",
                items: apartments,
                quantityKey: "nights",
              },
              {
                category: "Guest House",
                items: guesthouse,
                quantityKey: "nights",
              },
              {
                category: "Pick-up Thivim",
                items: pickthivim,
                quantityKey: "cars",
              },
              {
                category: "Room Decor",
                items: roomdecor,
                quantityKey: "rooms",
              },
              {
                category: "Sightseeing Tours",
                items: sightseeing,
                quantityKey: "people",
              },

              {
                category: "Activities",
                items: activities,
                quantityKey: "people",
              },
            ].map((section) => (
              <div key={section.category}>
                <div
                  className="flex justify-between items-center bg-[#008490]  text-white p-4 rounded-lg cursor-pointer"
                  onClick={() => toggleDropdown(section.category)}
                >
                  <span>{section.category}</span>
                  <span>
                    {openDropdowns[section.category] ? "\u25B2" : "\u25BC"}
                  </span>
                </div>
                {openDropdowns[section.category] && (
                  <div className="mt-2 space-y-2">
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center bg-gray-100 p-4 rounded-md"
                      >
                        <span>
                          {item.name} - ₹{item.price} per {section.quantityKey}
                        </span>
                        <div className="flex items-center gap-2">
                          <select
                            className="border border-gray-300 rounded px-2 py-1"
                            value={
                              quantities[item.id]?.[section.quantityKey] || 1
                            }
                            onChange={(e) =>
                              handleQuantityChange(
                                item,
                                section.quantityKey,
                                e.target.value
                              )
                            }
                          >
                            {[...Array(10).keys()].map((num) => (
                              <option key={num + 1} value={num + 1}>
                                {num + 1}
                              </option>
                            ))}
                          </select>
                          <input
                            type="checkbox"
                            className="h-6 w-6 accent-blue-500"
                            checked={selectedPackages.includes(item.id)}
                            onChange={() =>
                              handleSelection(
                                item,
                                section.quantityKey,
                                quantities[item.id]?.[section.quantityKey] || 1
                              )
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              className="bg-teal-600  text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600"
              onClick={() =>
                navigate("/checkout", {
                  state: { selectedPackages, total, profit, quantities },
                })
              }
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
