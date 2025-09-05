import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact_Form = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-myBgColor text-center">
      {/* Header */}
      <p className="text-sm font-bold text-red-600">
        GOVT <span className="text-blue-800">CERTIFIED</span>
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">
       Hari Motor Driving Training School
      </h2>
      <p className="mt-1 text-blue-900">
        Call us now or Book Online 24/7
      </p>

      {/* Form */}
      <form className="max-w-2xl mx-auto mt-8 space-y-6 text-left">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-gray-700">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium text-gray-700">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium text-gray-700">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900 transition"
          >
            <FaPaperPlane size={14} /> SEND MESSAGE
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact_Form;
