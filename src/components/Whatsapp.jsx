import React, { useState } from "react";
import whatsapp from "../assets/logo/whatspppp.png";

const Whatsapp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    // Replace with the phone number you want to use and the message you'd like to send
    const phoneNumber = "+919359512750"; // Example phone number
    const message = "Hi, I want to know more details about your package!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-8">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <div
            className={`absolute bottom-16 w-[120px] right-0 bg-[#5cc9ff] text-black font-bold text-md p-2 rounded-md shadow-md transition-all duration-100 opacity-0 ${
              isHovered ? "opacity-100" : ""
            }`}
          >
            Chat with us!
          </div>
        )}
        <img
          className="w-[70px] h-[70px] cursor-pointer"
          src={whatsapp}
          alt="WhatsApp"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Whatsapp;
