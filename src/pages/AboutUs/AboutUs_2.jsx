import React from "react";
import {
  FaChalkboardTeacher,
  FaClock,
  FaCalendarAlt,
  FaUserGraduate,
  FaPhoneAlt,
} from "react-icons/fa";
import OurBestInstructor from "./OurBestInstructor";

const AboutUs_2 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Stats Section */}
      <div className="bg-gray-900 text-white py-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-y-6 gap-x-0 sm:gap-x-16">
        {/* Teachers */}
        <div className="flex flex-col items-center w-full sm:w-auto px-6 py-4 border-b sm:border-b-0 sm:border-r border-white last:border-r-0">
          <FaChalkboardTeacher className="text-3xl mb-2" />
          <span className="text-3xl font-bold">25+</span>
          <span className="mt-1 text-base">Teachers</span>
        </div>
        {/* Training Hours */}
        <div className="flex flex-col items-center w-full sm:w-auto px-6 py-4 border-b sm:border-b-0 sm:border-r border-white last:border-r-0">
          <FaClock className="text-3xl mb-2" />
          <span className="text-3xl font-bold">2,500+</span>
          <span className="mt-1 text-base">Training Hours</span>
        </div>
        {/* Working Years */}
        <div className="flex flex-col items-center w-full sm:w-auto px-6 py-4 border-b sm:border-b-0 sm:border-r border-white last:border-r-0">
          <FaCalendarAlt className="text-3xl mb-2" />
          <span className="text-3xl font-bold">20+</span>
          <span className="mt-1 text-base">Working Years</span>
        </div>
        {/* Trained Persons */}
        <div className="flex flex-col items-center w-full sm:w-auto px-6 py-4">
          <FaUserGraduate className="text-3xl mb-2" />
          <span className="text-3xl font-bold">20K+</span>
          <span className="mt-1 text-base">Trained Persons</span>
        </div>
        
      </div>
      <div>
        <OurBestInstructor />
      </div>
      {/* Call to Action Footer */}
         <div className="bg-blue-900 text-white py-8 mt-2 flex flex-col md:flex-row items-center justify-between px-4 md:px-24 gap-4">
        <span className="text-xl sm:text-2xl font-semibold text-center md:text-left">
          Ready For Join Our Class?
        </span>
        <div className="flex items-center bg-blue-800 px-4 sm:px-6 py-3 rounded-lg w-full md:w-auto justify-center">
          <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          <span className="text-base sm:text-lg font-medium">
            +91 999-999-4613
          </span>
        </div>
      </div>
   
    </div>
  );
};

export default AboutUs_2;
