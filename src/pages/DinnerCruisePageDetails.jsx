import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import ocean from "../assets/images/ocean1.jpg";
import SinglePriceBox from "../components/SinglePriceBox";
import SinglePriceBoxMobile from "../components/SinglePriceBoxMobile";

const DinnerCruisePageDetails = () => {
  const total = useSelector((state) => state.packages.total);

  const itinerary = [
    {
      time: "6:30 PM",
      title: "Pick-up",
      description:
        "Pick-up starts from designated hotel locations in Arpora, Baga, Calangute, and Candolim. Extra ₹200 for pick-up and drop service.",
      duration: "1 hour 30 minutes",
    },
    {
      time: "8:00 PM",
      title: "Boarding and Welcome",
      description:
        "Arrive at the boarding point and receive a warm welcome from the crew. Get escorted to your seating area.",
      duration: "30 minutes",
    },
    {
      time: "9:00 PM",
      title: "Departure and Scenic Cruise",
      description:
        "Set sail along the picturesque Goan coastline and enjoy stunning views. Capture memorable photos of the surroundings.",
      duration: "2 hours",
    },
    {
      time: "9:30 PM",
      title: "Gastronomic Delight",
      description:
        "Enjoy a delicious buffet featuring a variety of dishes including appetizers, main courses, and desserts. Relish two complimentary drinks.",
      duration: "2 hours",
    },
    {
      time: "10:00 PM",
      title: "Live Entertainment",
      description:
        "Immerse yourself in lively music, dance performances, and cultural acts. Engage in interactive activities and enjoy unlimited entertainment.",
      duration: "1 hour",
    },
    {
      time: "11:30 PM",
      title: "Docking and Farewell",
      description:
        "Return to the starting point and bid farewell to the crew. Disembark from the Paradise Dinner Cruise.",
      duration: "30 minutes",
    },
  ];

  useEffect(() => {
    // Scroll to top when the page loads or component mounts
    window.scrollTo(0, 0);
  }, []);

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

      <div className="max-w-4xl mx-auto p-6 pt-[70px] md:pt-10">
        <div className="hidden md:block">
          <SinglePriceBox heading={"Dinner Cruise - ₹1200"} />
        </div>

        <div className="block md:hidden">
          <SinglePriceBoxMobile heading={"Price - ₹1200"} />
        </div>

        {/* Itinerary Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-center text-teal-700 mb-4">
            Dinner Cruise Itinerary
          </h2>

          {itinerary.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-teal-600">
                  {item.time}
                </span>
                <span className="text-sm text-gray-600">{item.duration}</span>
              </div>
              <h3 className="text-xl font-medium text-teal-800">
                {item.title}
              </h3>
              <p className="text-lg text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Food Menu Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Food Menu
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>MATAR PULAO</li>
            <li>DAL TADKA</li>
            <li>MIX VEG TAWA</li>
            <li>KADAI PANEER</li>
            <li>BUTTER CHICKEN</li>
            <li>CHICKEN CHILLI</li>
            <li>GAJAR KI KHEER</li>
            <li>PASTA SALAD</li>
            <li>GREEN SALAD</li>
            <li>CHAPATI</li>
            <li>PICKLE</li>
            <li>PAPAD</li>
          </ul>
        </div>

        {/* Notes Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Important Notes
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>
              Pick-up and drop are not included in the price and are chargeable
              at ₹200 extra.
            </li>
            <li>
              Bring comfortable clothing, a camera for photos, and enjoy the
              vibrant nightlife experience.
            </li>
          </ul>
        </div>

        {/* <div className="text-center mt-8">
          <button className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
            Book Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DinnerCruisePageDetails;
