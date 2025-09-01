import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaChevronDown,
  FaUser,
  FaRegCommentDots,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
        {/* Mobile Image */}
        <img
          src="/Images/ContactUs/business-woman-is-driving-talking-phone.jpg"
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

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
            Contact
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-100 rounded-2xl flex flex-col items-center p-8 text-center">
          <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4" />
          <div className="text-gray-500 mb-2">OUR OFFICE LOCATION</div>
          <div className="text-xl font-bold text-gray-900">1254 New Delhi</div>
        </div>
        <div className="bg-blue-600 rounded-2xl flex flex-col items-center p-8 text-center text-white">
          <FaPhoneAlt className="text-4xl mb-4" />
          <div className="mb-2">HAVE A QUESTION?</div>
          <h1 className="text-2xl font-bold hover:underline">
            +91 999-999-4613
          </h1>
        </div>
        <div className="bg-blue-100 rounded-2xl flex flex-col items-center p-8 text-center">
          <FaEnvelope className="text-4xl text-blue-600 mb-4" />
          <div className="text-gray-500 mb-2">EMAIL US ON</div>
          <a
            href="mailto:info@dride.com"
            className="text-xl font-bold text-gray-900 hover:underline"
          >
            info@dride.com
          </a>
        </div>
      </div>

      {/* Map and Form Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-8 items-start">
        {/* Map */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[520px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19809.96407396413!2d-0.134649!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c3e6b1b1b1%3A0x2e8b8b8b8b8b8b8b!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-16">
            <Link
              to="https://wa.me/917460902506"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-500 hover:text-green-600 text-2xl md:text-3xl font-medium gap-2"
            >
              <FaWhatsapp className="text-[40px]" />
              <span className="text-base md:text-lg text-gray-700 font-semibold">
                7460902506
              </span>
            </Link>
            <Link
              to="https://instagram.com/suhail_coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pink-500 hover:text-pink-600 text-2xl md:text-3xl font-medium gap-2"
            >
              <FaInstagram className="text-[40px]" />
              <span className="text-base md:text-lg text-gray-700 font-semibold">
                prime_7860
              </span>
            </Link>
          </div>
        </div>

        {/* Form */}
        <form className="bg-gray-50 rounded-2xl p-8 shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">Get A Quote</h2>
          <div className="border-b-2 border-blue-600 w-24 mb-6" />
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="tel"
                placeholder="Your Number"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div>
              <select className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Service</option>
                <option>Driving Lessons</option>
                <option>License Assistance</option>
                <option>Test Preparation</option>
                <option>Other</option>
              </select>
            </div>
            <div className="relative">
              <textarea
                placeholder="Your Message"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                rows={3}
              ></textarea>
              <FaRegCommentDots className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded font-bold text-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Call to Action Footer */}
      <div className="bg-blue-900 text-white py-8 flex flex-col md:flex-row items-center justify-between px-4 md:px-24 gap-4">
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

export default Contact;
