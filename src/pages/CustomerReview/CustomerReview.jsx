import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {FaPhoneAlt,FaChevronDown} from 'react-icons/fa';

const reviews = [
  {
    name: "Subash",
    location: "South Delhi",
    text: "Subash ji is an amazing instructor. Very calmly teaches all the essentials of driving a car and gives useful tips and knowledge as well!",
    image:
      "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  },
  {
    name: "Priya Sharma",
    location: "Malviya Nagar",
    text: "Great experience! The instructors are very patient and the cars are always clean. Highly recommend Prime Motor Driving School.",
    image: "/Images/TeamSection_img/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg",
  },
  {
    name: "Amit Verma",
    location: "Saket",
    text: "I passed my driving test on the first attempt. The training was thorough and the staff is very supportive.",
    image:  "/Images/TeamSection_img/young-bearded-man-with-striped-shirt.jpg",
  },
  {
    name: "Neha Singh",
    location: "Green Park",
    text: "The best driving school in Delhi! The lessons were fun and I felt confident behind the wheel.",
    image: "/Images/TeamSection_img/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
  },
  {
    name: "Rohit Kumar",
    location: "Hauz Khas",
    text: "Very professional and friendly instructors. I learned a lot and now drive confidently in city traffic.",
    image: "/Images/TeamSection_img/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
  },
];

const CustomerReview = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
        <img
          src="/Images/CustomerReview/Banner.jpg"
          alt="Customer Review Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
            Customer Review
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 mt-16 flex-1">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={1}
          className="w-full"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Testimonial Text */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Testimonial
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 mb-8">
                    "{review.text}"
                  </p>
                  <div className="border-b-4 border-blue-900 w-12 mb-4" />
                  <div className="font-bold text-blue-900 text-lg">
                    {review.name}
                  </div>
                  <div className="text-gray-600 text-sm">{review.location}</div>
                </div>
                {/* Testimonial Image */}
                <div className="flex justify-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-lg shadow-lg w-full max-w-md object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
      {/* Call to Action Footer */}
      <div className="bg-blue-900 text-white py-8 flex flex-col md:flex-row items-center justify-between px-4 md:px-24 gap-4 mt-0">
        <span className="text-xl sm:text-2xl font-semibold text-center md:text-left">Ready For Join Our Class?</span>
        <div className="flex items-center bg-blue-800 px-4 sm:px-6 py-3 rounded-lg w-full md:w-auto justify-center">
          <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          <span className="text-base sm:text-lg font-medium">+91 999-999-4613</span>
        </div>
      </div>
     
    </div>
  );
};

export default CustomerReview;
