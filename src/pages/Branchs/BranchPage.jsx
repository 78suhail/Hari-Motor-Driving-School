// BranchPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

const BranchPage = ({ branch }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
        <img
          src={branch.heroImage}
          alt={branch.label}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-white px-4 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{branch.label}</h1>
          <p className="text-lg md:text-1xl mb-4 mt-2">Professional Driving Training You Can Trust</p>
          <div className="animate-bounce mt-4 flex justify-center">
            <FaChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* About + Features */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 md:items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">About This Branch</h2>
          <p className="text-gray-700">{branch.about}</p>

          <div className="bg-gray-100 border-l-4 border-blue-900 p-4 text-gray-800 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-900 text-xl flex-shrink-0" />
            <span>Conveniently located for easy access.</span>
          </div>

          <ul className="border-l-4 border-blue-900 pl-4 mt-4 space-y-2 text-gray-800">
            {branch.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-900 mt-1" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition text-center"
            >
              Enroll Now
            </Link>
            <button className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded font-semibold hover:bg-gray-700 transition">
              <FaPhoneAlt className="w-5 h-5 mr-2" />
              {branch.contact}
            </button>
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="space-y-6">
          <div className="w-full h-60 md:h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src={branch.classroomImage}
              alt="Classroom Training"
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="w-full h-60 md:h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src={branch.practicalImage}
              alt="Practical Training"
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchPage;
