import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {Link} from 'react-router-dom'

const BannerSlider = () => {
  const slides = [
    {
      image: "/Images/Banner/123.jpg",
      alt: "Slide 1",
      textLines: [
        "Drive Safe, Drive Smart.",
        "Learn from Expert Instructors.",
        "Start Your Journey Today!"
      ],
    },
    {
      image: "/Images/Banner/123.jpg",
      alt: "Slide 2",
      textLines: [
        "Master the Road, Gain Confidence.",
        "Professional Training.",
        "Book Your Lesson Now!"
      ],
    },
    {
      image: "/Images/Banner/123.jpg",
      alt: "Slide 3",
      textLines: [
        "Safe Driving Guaranteed.",
        "Modern Vehicles.",
        "Enroll Today!"
      ],
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative overflow-hidden">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[850px] object-cover animate-zoom"
            />

            {/* Overlay Text & Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              {slide.textLines.map((line, i) => (
                <h2
                  key={i}
                  className={`text-white font-sans drop-shadow-lg mb-1 sm:mb-2
                    ${i === 0 ? "text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-wide" : ""}
                    ${i === 1 ? "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide" : ""}
                    ${i === 2 ? "text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide" : ""}
                  `}
                >
                  {line}
                </h2>
              ))}
              <Link to='/contact'>
              <button className="mt-4 bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                Book Now
              </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
