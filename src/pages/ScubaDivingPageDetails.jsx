import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import ocean from "../assets/images/ocean1.jpg";

// Import images for Scuba Diving locations and activities
import breakfastImg from "../assets/images/ocean1.jpg";
import malvanBeachImg from "../assets/images/ocean1.jpg";
import scubaDivingImg from "../assets/images/ocean1.jpg";
import waterSportsImg from "../assets/images/ocean1.jpg";
import lunchImg from "../assets/images/ocean1.jpg";

const ScubaDivingPageDetails = () => {
  const total = useSelector((state) => state.packages.total);

  // Scuba Diving Itinerary with Images
  const itinerary = [
    {
      time: "7:00 AM",
      title: "Pickup from Hotel",
      description:
        "Start your day with a prompt pickup from your hotel in North Goa (Calangute, Baga, Arpora, Candolim, and Sinquerim). Enjoy comfortable AC transportation.",
      duration: "N/A",
      image: null, // No image for pickup
    },
    {
      time: "8:00 AM",
      title: "Complimentary Breakfast",
      description:
        "On the way to Malvan, enjoy a complimentary South Indian breakfast with choices like idli, vada, dosa, or upma with hot tea or coffee.",
      duration: "1 hour",
      image: breakfastImg,
    },
    {
      time: "10:00 AM",
      title: "Arrival at Malvan Beach",
      description:
        "Arrive at Malvan Beach by around 10 AM. Get a briefing on the day’s activities and complete the registration at the Water Sports counter.",
      duration: "30 minutes",
      image: malvanBeachImg,
    },
    {
      time: "10:30 AM",
      title: "Scuba Diving and Water Sports (Batch 1)",
      description:
        "For Group 1: Scuba Diving - The first group heads to the dive site for a safety briefing, basic training, and an exciting dive under the supervision of expert instructors.",
      duration: "1 hour",
      image: scubaDivingImg,
    },
    {
      time: "10:30 AM",
      title: "Water Sports (Batch 2)",
      description:
        "For Group 2: Water Sports - Enjoy thrilling water sports activities including Jet Skiing, Banana Ride, Bumper Ride, and Speed Boat rides.",
      duration: "1 hour",
      image: waterSportsImg,
    },
    {
      time: "12:00 PM",
      title: "Switch Over",
      description:
        "Once the first group finishes their scuba diving session, they swap with the second group. The ones who completed water sports will now dive, and vice versa.",
      duration: "N/A",
      image: null, // No image for switching
    },
    {
      time: "1:30 PM - 2:00 PM",
      title: "Lunch (Thali)",
      description:
        "After all activities are completed, enjoy a fulfilling Veg/Non-Veg Thali lunch at a local restaurant in Malvan. Taste traditional Malvani dishes.",
      duration: "1 hour",
      image: lunchImg,
    },
    {
      time: "2:30 PM",
      title: "Departure from Malvan",
      description:
        "After lunch, relax and prepare for the return journey to North Goa. Board the bus back to your hotel.",
      duration: "N/A",
      image: null, // No image for departure
    },
    {
      time: "5:00 PM",
      title: "Arrival Back in Goa",
      description:
        "Arrive back at your hotel in North Goa by approximately 5 PM, completing a full day of scuba diving and water sports adventures.",
      duration: "N/A",
      image: null, // No image for arrival
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${ocean})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen bg-blue-50"
    >
      <Header />
      <TotalAmountBox total={total} />
      <div className="max-w-4xl mx-auto p-6 pt-[70px] md:pt-10">
        {/* Title of the page */}
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Scuba Diving with Water Sports Itinerary
        </h1>

        {/* Itinerary Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Itinerary
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
                  className="mt-4 w-full h-60 object-cover rounded-lg shadow-md"
                />
              )}
            </div>
          ))}
        </div>

        {/* Inclusions Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Inclusions
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>
              Pickup & drop-off from hotels in North Goa (Calangute, Baga,
              Arpora, Candolim, Sinquerim).
            </li>
            <li>Complimentary South Indian breakfast on the way to Malvan.</li>
            <li>Scuba Diving session with gear and instructor.</li>
            <li>
              Water Sports: Jet Ski, Banana Ride, Bumper Ride, Speed Boat.
            </li>
            <li>Veg/Non-Veg Thali lunch at a local restaurant in Malvan.</li>
          </ul>
        </div>

        {/* Notes Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Important Notes
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>
              Carry swimwear, sunscreen, and a change of clothes for the
              activities.
            </li>
            <li>All activities are subject to weather conditions.</li>
            <li>
              Timing may vary based on the group’s participation and weather
              conditions.
            </li>
          </ul>
        </div>

        {/* Booking Button */}
        <div className="text-center mt-8">
          <button className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScubaDivingPageDetails;
