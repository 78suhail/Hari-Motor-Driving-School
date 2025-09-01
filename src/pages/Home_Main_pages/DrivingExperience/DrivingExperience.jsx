import React from "react";
import { Link } from "react-router-dom";
import { FaCarSide, FaCheckCircle } from "react-icons/fa";

export default function DrivingExperience() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Banner */}
      <div className="relative">
        <img
          src="/Images/AboutUs/About_short.jpg"
          alt="Safe Driving"
          className="w-full h-auto object-cover rounded shadow-lg"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-6 text-center text-white">
          <FaCarSide className="text-yellow-400 text-5xl mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Because Safe Driving is NO Accident!
          </h2>
          <p className="text-sm mb-4">
            We teach our students safe, responsible driving techniques and practices.
          </p>
          <Link
            to="/appointment"
            className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200"
          >
            REQUEST AN APPOINTMENT
          </Link>
        </div>
      </div>

      {/* Right Text */}
      <div>
        <p className="text-yellow-500 font-bold uppercase mb-2">
          About Us in Short
        </p>
        <h2 className="text-3xl font-bold mb-4">
          Ready For A Safe, Fun Driving Experience?
        </h2>
        <hr className="border-gray-300 mb-4" />
        <p className="text-gray-600 mb-6">
          The school offers the following services for teenage first-time drivers, new adult learners and existing drivers with lapsed licenses.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
          <p className="flex items-center text-gray-700">
            <FaCheckCircle className="text-yellow-500 mr-2" /> Basic driving skills
          </p>
          <p className="flex items-center text-gray-700">
            <FaCheckCircle className="text-yellow-500 mr-2" /> Expressway/Beltway Driving
          </p>
          <p className="flex items-center text-gray-700">
            <FaCheckCircle className="text-yellow-500 mr-2" /> Highway and city driving
          </p>
          <p className="flex items-center text-gray-700">
            <FaCheckCircle className="text-yellow-500 mr-2" /> Road test preparation
          </p>
          <p className="flex items-center text-gray-700">
            <FaCheckCircle className="text-yellow-500 mr-2" /> Parallel parking
          </p>
          <p className="flex items-center text-gray-700">
            <FaCheckCircle className="text-yellow-500 mr-2" /> Road test vehicle usage
          </p>
        </div>

        {/* Button */}
        <Link
          to="/about"
          className="inline-flex items-center mt-6 bg-yellow-500 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-600"
        >
          VIEW MORE <span className="ml-2 text-lg">+</span>
        </Link>
      </div>
    </section>
  );
}
