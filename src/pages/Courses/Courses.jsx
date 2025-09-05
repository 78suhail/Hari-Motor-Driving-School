import React from "react";
import {
  FaChartBar,
  FaClock,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PricingPackages from "./PricingPackages";
import Testimonials from '../Testimonials/Testimonials'
import StatsBanner from '../Home_Main_pages/Banner/StatsBanner'

const courses = [
  {
    title: "Defensive Driving",
    desc: "Defensive driving is a set of driving techniques that help minimize the risks of accidents and improve overall safety.",
    image: "/Images/Course/man-woman-car.jpg",
    price: "$80",
    level: "Beginner",
    duration: "6 Weeks",
    instructor: "David Watt",
    instructorRole: "Instructor",
    instructorImg:
      "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
  },
  {
    title: "Professional Driving",
    desc: "Professional driving involves driving for a living, such as delivery drivers, taxi drivers, and truck drivers it requires.",
    image: "/Images/Course/businesswoman-driving-her-car-city.jpg",
    price: "$150",
    level: "Intermediate",
    duration: "9 Weeks",
    instructor: "David Watt",
    instructorRole: "Instructor",
    instructorImg:
      "/Images/TeamSection_img/young-bearded-man-with-striped-shirt.jpg",
  },
  {
    title: "Traffic Science",
    desc: "The Traffic Science course covers the principles and practices of traffic engineering, including traffic flow theory.",
    image: "/Images/Course/traffic-light-bicycles-bucharest-romania.jpg",
    price: "$90",
    level: "Advanced Level",
    duration: "6 Weeks",
    instructor: "David Watt",
    instructorRole: "Instructor",
    instructorImg:
      "/Images/TeamSection_img/young-bearded-man-with-striped-shirt.jpg",
  },
];

const Courses = () => {
  return (
    <div className="bg-myBgColor min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
        {/* Mobile Image */}
        <img
          src="/Images/Course/businesswoman-driving-her-car-city.jpg"
          alt="Courses Banner Mobile"
          className="absolute inset-0 w-full h-full object-contain bg-black opacity-90 block md:hidden"
        />
        {/* Desktop Image */}
        <img
          src="/Images/Course/man-woman-car.jpg"
          alt="Courses Banner Desktop"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 hidden md:block"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
            Courses
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center pt-10 pb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🎓</span>
          <span className="text-blue-600 font-semibold text-lg">
            Our Trending Courses
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Our Popular Driving Courses
        </h1>
      </div>

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col min-h-[340px]"
          >
            {/* Image with overlay badges */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="h-36 w-full object-cover rounded-t-2xl"
              />
              <div className="absolute top-2 left-2 flex items-center z-10">
                <span className="bg-black text-white font-bold px-4 py-1 rounded-l-lg text-lg">
                  {course.price}
                </span>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-r-lg flex items-center gap-1 text-sm">
                  <FaChartBar className="inline-block w-4 h-4" />
                  {course.level}
                </span>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold mb-2 text-blue-700 hover:underline cursor-pointer">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4 flex-1">{course.desc}</p>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={course.instructorImg}
                  alt={course.instructor}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <div className="font-semibold text-gray-800 leading-tight">
                    {course.instructor}
                  </div>
                  <div className="text-blue-600 text-sm leading-tight">
                    {course.instructorRole}
                  </div>
                </div>
                <span className="text-gray-500 text-sm flex items-center ml-auto">
                  <FaClock className="w-4 h-4 mr-1 text-blue-600" />
                  {course.duration}
                </span>
              </div>
              <Link to="/contact">
                <button className="w-full border border-gray-300 px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 transition">
                  BOOK NOW
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-14">
        <StatsBanner />
      </div>
      <div>
        <PricingPackages />
      </div>
      <div className="mb-6 ">
        <Testimonials />
      </div>
    </div>
  );
};

export default Courses;
