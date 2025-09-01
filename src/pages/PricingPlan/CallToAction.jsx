import React from "react";
import { FaPhoneAlt, FaPlay } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="relative bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        
        {/* Left Image */}
        <div className="flex-shrink-0 pl-6">
          <img
            src="/Images/young-couple-car-trip.jpg" 
            alt="Driver"
            className="w-64 md:w-80 " 
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 p-6 rounded-lg relative">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-600 p-3 rounded-full">
              <FaPlay className="text-white text-lg" />
            </span>
            <div>
              <p className="text-sm">Call Us Any Time</p>
              <p className="text-lg font-semibold flex items-center gap-2">
                <FaPhoneAlt className="text-blue-500" />
                (+163) 6972 9901
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
            Start Learning To Drive Today <br /> Contact Now!
          </h2>

          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
