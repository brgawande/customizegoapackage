import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css"; // Assuming you have this for custom styles

const ReusableSwiper = ({ images, slidesPerView = 1, spaceBetween = 10 }) => {
  // Define breakpoints for responsive design
  const breakpoints = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true} // Loop the slides
        pagination={{ clickable: true }} // Add clickable pagination dots
        navigation={true} // Enable next/previous arrows
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Move every 1 second
        speed={800} // Smooth transition speed (800ms for example)
        breakpoints={breakpoints} // Enable responsive design
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover", // Ensures images cover the container without distortion
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReusableSwiper;
