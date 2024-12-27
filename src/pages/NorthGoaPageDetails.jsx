import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import ocean from "../assets/images/ocean1.jpg";
import acbus from "../assets/northgoa/acbus.jpg"; // Sample image
import lunch from "../assets/northgoa/lunch.jpg"; // Sample image
import fortAguadaImg from "../assets/northgoa/aguada.jpg"; // Sample image
import senquirimFortImg from "../assets/northgoa/sinquerium.jpg";
import bagaBeachImg from "../assets/northgoa/baga.jpg";
import anjunaBeachImg from "../assets/northgoa/anjuna.jpeg";
import vagatorBeachImg from "../assets/northgoa/vagator.jpg";
import thunderWorldImg from "../assets/northgoa/thunderworld.jpg";
import SinglePriceBox from "../components/SinglePriceBox";
import SinglePriceBoxMobile from "../components/SinglePriceBoxMobile";

const NorthGoaPageDetails = () => {
  const total = useSelector((state) => state.packages.total);

  // North Goa Itinerary Details with Images
  const itinerary = [
    {
      time: "8:30 AM",
      title: "Pickup from Baga/Calangute Area",
      description:
        "Pickup Location: Hotel or designated spot in the Baga/Calangute area. Travel Mode: Shared coach.",
      duration: "N/A",
      image: acbus, // No image for pickup
    },
    {
      time: "9:00 AM",
      title: "Fort Aguada",
      description:
        "Explore this historic 17th-century Portuguese fort, known for its lighthouse and panoramic views of the Arabian Sea.",
      duration: "45 minutes",
      image: fortAguadaImg, // Example image for Fort Aguada
    },
    {
      time: "10:00 AM",
      title: "Senquirim Fort",
      description:
        "Visit this ancient fort with a rich history and enjoy its scenic views. Learn about its strategic importance during the Portuguese era.",
      duration: "45 minutes",
      image: senquirimFortImg, // Example image for Senquirim Fort
    },
    {
      time: "11:00 AM",
      title: "Baga Beach / Snow Park",
      description:
        "Brief stop at Baga Beach, followed by a visit to the Snow Park for some fun in artificial snow.",
      duration: "1.5 hours",
      image: bagaBeachImg, // Example image for Baga Beach
    },
    {
      time: "12:30 PM",
      title: "Lunch Break",
      description:
        "Enjoy a delicious lunch at a local restaurant or as per the tour package arrangement.",
      duration: "1 hour",
      image: lunch, // No image for lunch
    },
    {
      time: "1:30 PM",
      title: "Anjuna Beach",
      description:
        "Visit Anjuna Beach, known for its vibrant atmosphere and stunning views. Enjoy some free time to relax or explore.",
      duration: "1 hour",
      image: anjunaBeachImg, // Example image for Anjuna Beach
    },
    {
      time: "2:30 PM",
      title: "Vagator Beach",
      description:
        "Head to Vagator Beach, known for its scenic beauty and relaxed atmosphere. Enjoy more beach time or explore the surroundings.",
      duration: "1 hour",
      image: vagatorBeachImg, // Example image for Vagator Beach
    },
    {
      time: "3:30 PM",
      title: "Thunder World, Arpora",
      description:
        "Experience the fun and excitement of Thunder World, an amusement park with various rides and attractions.",
      duration: "1 hour",
      image: thunderWorldImg, // Example image for Thunder World
    },
    {
      time: "4:30 PM",
      title: "Departure for Baga/Calangute Area",
      description: "Return journey to the pickup point.",
      duration: "N/A",
      image: null, // No image for departure
    },
    {
      time: "5:00 PM",
      title: "Drop-off in Baga/Calangute Area",
      description: "Tour concludes with a drop-off in the Baga/Calangute area.",
      duration: "N/A",
      image: null, // No image for drop-off
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

        {/* SinglePriceBox for desktop and tablet */}
        <div className="hidden md:block">
          <SinglePriceBox heading={"North Goa Tour - 350Rs"} />
        </div>

        {/* SinglePriceBoxMobile for mobile */}
        <div className="block md:hidden">
          <SinglePriceBoxMobile heading={"Price - 350Rs"} />
        </div>

        {/* Itinerary Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-center text-teal-700 mb-4">
            North Goa Sightseeing Tour Itinerary
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
              Timing Flexibility: The timings mentioned are tentative and may
              change based on the situation, crowd, and fellow passengers’
              return to the bus after each visit.
            </li>
            <li>
              Order of Visit: The order of visits may change based on weather
              conditions, government directives, or emergencies as determined by
              the tour operator.
            </li>
            <li>
              Ensure to bring sunscreen, comfortable clothing, and a camera to
              capture the moments!
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

export default NorthGoaPageDetails;
