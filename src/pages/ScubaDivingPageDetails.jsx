import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import ocean from "../assets/images/ocean1.jpg";

// Import images for Scuba Diving locations and activities
import acbus from "../assets/northgoa/acbus1.webp";
import breakfastImg from "../assets/scubadiving/breakfast.webp";
import malvanBeachImg from "../assets/images/ocean1.jpg";
import scubaDivingImg from "../assets/scubadiving/scuba.jpg";
import parasailing from "../assets/scubadiving/parasailing.jpg";
import jetski from "../assets/scubadiving/jetskiee.jpg";
import banana from "../assets/scubadiving/banana.jpg";
import speeedboat from "../assets/scubadiving/speed boat.jpg";
import bumper from "../assets/scubadiving/bumper.webp";
import beach from "../assets/scubadiving/beach.jpeg";

import lunchImg from "../assets/scubadiving/lunch.jpg";

const ScubaDivingPageDetails = () => {
  const total = useSelector((state) => state.packages.total);

  // Scuba Diving Itinerary with Images
  const itinerary = [
    {
      time: "8:00 AM",
      title: "Pickup from Hotel",
      description:
        "Start your day with a prompt pickup from your hotel in North Goa (Calangute, Baga, Arpora, Candolim, and Sinquerim). Enjoy comfortable AC transportation.",
      duration: "10 Min",
      image: acbus, // No image for pickup
    },
    {
      time: "9:00 AM",
      title: "Complimentary Breakfast",
      description:
        "On the way to Malvan, enjoy a complimentary South Indian breakfast with choices like idli, vada, dosa, or upma with hot tea or coffee.",
      duration: "1 hour",
      image: breakfastImg,
    },
    {
      time: "10:00 AM",
      title: "Arrival at Beach",
      description:
        "Arrive at  Beach by around 10 AM. Get a briefing on the day’s activities and complete the registration at the Water Sports counter.",
      duration: "30 minutes",
      image: beach,
    },
    {
      time: "10:30 AM",
      title: "Scuba Diving ",
      description:
        "For Group 1: Scuba Diving - The first group heads to the dive site for a safety briefing, basic training, and an exciting dive under the supervision of expert instructors.",
      duration: "1 hour",
      image: scubaDivingImg,
    },
    {
      time: "",
      title: "Parasailing",
      description:
        "For Group 2: Parasailing - Soar high above the water and enjoy breathtaking views during this exhilarating parasailing adventure..",
      duration: "",
      image: parasailing,
    },
    {
      time: "",
      title: "JetSki",
      description:
        "For Group 2: JetSki - Experience the thrill of jet skiing on the water with unmatched speed and adventure, perfect for adrenaline seekers.",
      duration: "",
      image: jetski,
    },
    {
      time: "",
      title: "Banana Ride",
      description:
        "For Group 2:  Hold on tight and laugh with friends as you ride the waves on this fun-filled banana boat ride.",
      duration: "",
      image: banana,
    },
    {
      time: "",
      title: "Speed Boat",
      description:
        "For Group 2: Feel the adrenaline rush as you race across the water on a high-speed boat ride.",
      duration: "",
      image: speeedboat,
    },
    {
      time: "",
      title: "Bumper Ride",
      description:
        "For Group 2: Bounce and splash across the water in this exciting bumper ride experience.",
      duration: "",
      image: bumper,
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
        "After all activities are completed, enjoy a fulfilling Veg/Non-Veg Thali lunch . Taste traditional Malvani dishes.",
      duration: "1 hour",
      image: lunchImg,
    },
    {
      time: "2:30 PM",
      title: "Departure ",
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

  useEffect(() => {
    // Scroll to top when the page loads or component mounts
    window.scrollTo(0, 0);
  }, []);

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
                  className="mt-4 w-full h-auto object-contain rounded-lg shadow-md"
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
            <li>Veg/Non-Veg Thali lunch.</li>
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
      </div>
    </div>
  );
};

export default ScubaDivingPageDetails;
