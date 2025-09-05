import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import AboutUsSection from "./AboutUsSection";

const AboutUs = () => {
     const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-myBgColor min-h-screen ">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
        {/* Mobile Image */}
        <img
          src="/Images/AboutUs/man-driving-with-his-girlfriend.jpg"
          alt="Contact Hero Mobile"
          className="absolute inset-0 w-full h-full object-contain bg-black opacity-90 block md:hidden"
        />

        {/* Desktop Image */}
        <img
          src="/Images/ContactUs/route-discussion-rainy-drive-driver-girl.jpg"
          alt="Contact Hero Desktop"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 hidden md:block"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
            About Us
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 md:items-center">
        <div
          className="flex flex-col gap-8 w-full h-full md:justify-center md:h-full"
          style={{ minHeight: "100%" }}
        >
          <div className="mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight">
              About Us
            </h2>
            <div className="text-lg md:text-xl font-semibold text-gray-700">
              Hari Motor Driving Training School
            </div>
          </div>
          {/* First Image */}
          <div className="w-full h-60 md:h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/Images/AboutUs/forklift-loading-truck-with-freshly-cut-wooden-planks-construction-industry.jpg"
              alt="Driving Experience 1"
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Second Image */}
          <div className="w-full h-60 md:h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/Images/AboutUs/About_short.jpg"
              alt="Driving Experience 2"
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        <div>
          {/* Highlighted Box */}
          <div className="bg-gray-100 border-l-4 border-blue-900 p-4 mb-6 text-gray-800 text-base">
            <span className="font-medium">
               Motor Driving Training School,
            </span>{" "}
            We take pride in being a Government of Delhi NCR Approved Driving
            Training School in South Delhi.
          </div>
          <p className="mb-4 text-gray-700">
            Talent Motor Driving Training School is a legacy holder and the best
            driving school in South Delhi, we have been providing world-class
            services <span className="font-semibold">since 1998</span>, which
            makes us a suitable driving school to trust.
          </p>
          <p className="mb-4 text-gray-700">
            We have a <span className="font-semibold">dedicated team</span> of
            pros with full knowledge of industry skills; it will be their job to
            teach you to drive in every{" "}
            <span className="font-semibold">Indian Road condition</span>, making
            you a driving professional in{" "}
            <span className="font-semibold">no time</span>.
          </p>
          <p className="mb-4 text-gray-700">
            Driving school becomes a{" "}
            <span className="font-semibold">piece of cake</span> when you have
            friendly, professional instructors to walk you through the process.
            That’s why we, at Prime Motor Driving School, are committed to
            providing{" "}
            <span className="font-semibold">all-rounded training</span> to our
            students in a fun, yet{" "}
            <span className="font-semibold">disciplined</span> environment.
          </p>
          {/* Feature List */}
          <ul className="border-l-4 border-blue-900 pl-4 mb-6 space-y-2 text-gray-800">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-900 mt-1" /> Over 14 years of
              aptitude for driver security experience
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-900 mt-1" /> Courses are
              created by the expert driving educators.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-900 mt-1" /> Expert trainers
              with over 10 years of experience.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-900 mt-1" /> Neat and clean
              vehicles
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-900 mt-1" /> Integrated
              control pedals ensuring complete safety while you learn.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-900 mt-1" /> Pick and drop
              service.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-900 mt-1" /> Classrooms
              equipped with modern projector systems and air conditioning.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-900 mt-1 text-[23px]" /> We
              also have a Display space to showcase all the spare parts of cars
              to get you well-familiar with cars.
            </li>
          </ul>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact" onClick={scrollToTop}
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition text-center"
            >
              BOOK NOW
            </Link>
            <button className="flex items-center justify-center bg-blue-900 text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition">
              <FaPhoneAlt className="w-5 h-5 mr-2" />
              +91 9999 99 4613
            </button>
          </div>
        </div>
      </div>

      <div>
        <AboutUsSection />
      </div>
    </div>
  );
};

export default AboutUs;
