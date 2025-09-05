import React from "react";
import { Link } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaIdCard,
  FaChevronDown,
} from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Testimonials from "../Testimonials/Testimonials";

const services = [
  {
    title: "Instructor Training",
    img: "/Images/OurService_img/handsome-male-taxi-driver-costume.jpg",
    description:
      "Driving instructor training is a process that involves passing three tests to qualify as a driving instructor course.",
    icon: <FaChalkboardTeacher className="text-white text-2xl" />,
    iconBg: "bg-blue-600",
    link: "/contact",
  },
  {
    title: "Driving License",
    img: "/Images/OurService_img/portrait-brunette-woman-her-car.jpg",
    description:
      "A driving license is an official document that permits an individual to operate one or more types of motorized vehicles.",
    icon: <FaIdCard className="text-white text-2xl" />,
    iconBg: "bg-blue-600",
    link: "/contact",
  },
  {
    title: "Safety Guideline",
    img: "/Images/Course/traffic-light-bicycles-bucharest-romania.jpg",
    description:
      "Safety guidelines cover topics such as safety, chemical safety, and emergency procedures. to prevent injuries",
    icon: <AiFillSafetyCertificate className="text-white text-2xl" />,
    iconBg: "bg-blue-600",
    link: "/cONTACT",
  },
];

const Services = () => {
  return (
    <div className="bg-myBgColor min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
        <img
          src="/Images/ContactUs/route-discussion-rainy-drive-driver-girl.jpg"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
            Services
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <section className="bg-gray-50 py-12 mt-2 flex flex-col items-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-xl w-full h-48 object-cover"
                />
                <div
                  className={`absolute bottom-0 right-0 m-3 p-3 rounded-lg ${service.iconBg} flex items-center justify-center shadow-lg`}
                >
                  {service.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-700 transition group w-fit"
              >
                BOOK NOW
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <div className="pb-12">
        <Testimonials />
      </div>
    </div>
  );
};

export default Services;
