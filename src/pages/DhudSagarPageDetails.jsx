import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import ocean from "../assets/images/ocean1.jpg";
import acbus from "../assets/northgoa/acbus1.webp";
import jeepSafariImg from "../assets/sudhsagar/jeep.jpg";
import dudhsagarWaterfallImg from "../assets/sudhsagar/waterfall.webp";
import spicePlantationImg from "../assets/sudhsagar/spice.webp";
import SinglePriceBox from "../components/SinglePriceBox";
import SinglePriceBoxMobile from "../components/SinglePriceBoxMobile";

const DhudSagarPageDetails = () => {
  const total = useSelector((state) => state.packages.total);

  const itinerary = [
    {
      time: "6:00 AM",
      title: "Pickup from North Goa Hotel",
      description:
        "The trip will start at 6.00 am and our driver will pick you up from your hotel or residence by AC Executive Coach. Our driver will drop you at the parking area near Mollem National Park. Pickup points include Baga, Calangute, Arpora, Candolim & Panjim.",
      duration: "30 min",
      image: acbus, // No image for pickup
    },
    {
      time: "9:30 AM",
      title: "Jeep Safari to Dudhsagar Falls",
      description:
        "From the National Park, you will be transferred to a Jeep Safari, which will cover 12 kilometers through the Bhagwan Mahavir Wildlife Sanctuary while crossing numerous small streams. You’ll be able to seek the thrill of adventure and admire the wondrous flora and fauna as you drive across the wilderness in a Jeep safari. ",
      duration: "45 minutes",
      image: jeepSafariImg,
    },
    {
      time: "10:15 AM",
      title: "Enjoy & Swim at Dudhsagar Waterfall",
      description:
        "Spend 2 hours at the base of the majestic Dudhsagar Waterfall. Swim, admire the beauty, and observe the natural fish. Life jackets will be provided for safety.",
      duration: "2 hours",
      image: dudhsagarWaterfallImg,
    },
    {
      time: "12:30 PM",
      title: "Lunch & Spice Plantation Tour",
      description:
        "Head to a nearby spice plantation and relish a traditional Goan buffet lunch. Explore herbs and spices like nutmeg, cloves, and cinnamon. Optional activities include an elephant ride or shower (additional cost).",
      duration: "1.5 hours",
      image: spicePlantationImg,
    },
    {
      time: "5:00 PM",
      title: "Drop-off to North Goa Hotels",
      description:
        "After an adventurous day, drop-off to your hotel or residence.",
      duration: "N/A",
      image: null, // No image for drop-off
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
        {/* Title of the page */}
        <div className="hidden md:block">
          <SinglePriceBox heading={"Dudhsagar Waterfall Tour - 2000Rs"} />
        </div>

        {/* SinglePriceBoxMobile for mobile */}
        <div className="block md:hidden">
          <SinglePriceBoxMobile heading={"Price - 2000Rs"} />
        </div>

        {/* Itinerary Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-center text-teal-700 mb-4">
            Dudhsagar Waterfall Tour Itinerary
          </h2>

          {/* Itinerary Breakdown */}
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
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-4 w-full h-auto object-contain md:object-cover rounded-lg shadow-md"
                />
              )}
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Important Notes
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>
              Jeep Safari entry fees, life jacket charges, and forest entry fees
              are included in the package.
            </li>
            <li>
              Timing flexibility may apply based on weather conditions and group
              requirements.
            </li>
            <li>
              Carry swimwear, sunscreen, and comfortable clothing for the trip.
            </li>
          </ul>
        </div>

        {/* Booking Button */}
        {/* <div className="text-center mt-8">
          <button className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
            Book Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DhudSagarPageDetails;
