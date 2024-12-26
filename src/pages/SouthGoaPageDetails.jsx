import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import ocean from "../assets/images/ocean1.jpg";

// Import images for South Goa locations
import miramarBeachImg from "../assets/images/ocean1.jpg";
import donaPaulaImg from "../assets/images/ocean1.jpg";
import bomJesusBasilicaImg from "../assets/images/ocean1.jpg";
import seCathedralImg from "../assets/images/ocean1.jpg";
import stAugustineTowerImg from "../assets/images/ocean1.jpg";
import mangueshiTempleImg from "../assets/images/ocean1.jpg";
import miniBalajiTempleImg from "../assets/images/ocean1.jpg";
import riverCruiseImg from "../assets/images/ocean1.jpg";

const SouthGoaPageDetails = () => {
  const total = useSelector((state) => state.packages.total);

  // South Goa Itinerary Details with Images
  const itinerary = [
    {
      time: "09:00 AM",
      title: "Pickup from Calangute",
      description:
        "Pickup Point: Calangute (fixed point closest to your hotel/resort). Start your day with a group pickup.",
      duration: "N/A",
      image: null, // No image for pickup
    },
    {
      time: "09:30 AM",
      title: "Calangute to Miramar Beach",
      description:
        "Start your day at Miramar Beach, a serene location known for its peaceful atmosphere. This is also the site of the Samadhi of Goa's first Chief Minister, Late Dayananda Bandodkar.",
      duration: "30 minutes",
      image: miramarBeachImg,
    },
    {
      time: "10:30 AM",
      title: "Dona Paula Viewpoint",
      description:
        "Next, visit Dona Paula Beach, offering breathtaking views where the River Zuari meets the Arabian Sea. This beach is also famous for its water sports and the legend of Dona Paula de Menezes.",
      duration: "1 hour",
      image: donaPaulaImg,
    },
    {
      time: "12:00 PM",
      title: "Bom Jesus Basilica (Old Goa Churches)",
      description:
        "Explore the Basilica of Bom Jesus, a UNESCO World Heritage Site, home to the sacred remains of St. Francis Xavier. It’s famous for its stunning baroque architecture and religious significance.",
      duration: "45 minutes",
      image: bomJesusBasilicaImg,
    },
    {
      time: "12:45 PM",
      title: "Se Cathedral",
      description:
        "One of the largest churches in Asia, Se Cathedral is a magnificent 16th-century monument to the Roman Catholic rule in Goa. It’s known for its Portuguese-inspired design and historical importance.",
      duration: "45 minutes",
      image: seCathedralImg,
    },
    {
      time: "01:30 PM",
      title: "St. Augustine Tower",
      description:
        "Head to the nearby St. Augustine Tower, a towering remnant of the Church of St. Augustine. This 46-meter-high structure is all that remains and provides a glimpse into Goa’s colonial history.",
      duration: "30 minutes",
      image: stAugustineTowerImg,
    },
    {
      time: "02:00 PM",
      title: "Mangueshi Temple",
      description:
        "Visit the Mangueshi Temple, one of Goa's most famous Hindu temples, dedicated to Lord Shiva. The temple is known for its serene ambiance and striking white facade.",
      duration: "1 hour",
      image: mangueshiTempleImg,
    },
    {
      time: "03:00 PM",
      title: "Mini Balaji Temple, Ponda",
      description:
        "Next, head to the Mini Balaji Temple in Ponda, a smaller temple inspired by South Indian temple architecture, offering a peaceful atmosphere perfect for spiritual reflection.",
      duration: "1 hour",
      image: miniBalajiTempleImg,
    },
    {
      time: "04:30 PM",
      title: "River Cruise (Boat Cruise)",
      description:
        "End the day with a relaxing river cruise. Enjoy Goan culture through vibrant music and dance performances while cruising along the river. This serene evening ride offers the perfect conclusion to your day.",
      duration: "1 hour",
      image: riverCruiseImg,
    },
    {
      time: "07:00 PM",
      title: "Drop-off",
      description:
        "Return to your hotel after the boat cruise, completing a full day of sightseeing.",
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
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          South Goa Sightseeing Tour Itinerary
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
        <div className="text-center mt-8">
          <button className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SouthGoaPageDetails;
