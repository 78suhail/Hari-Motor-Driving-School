import React, { useState } from "react";
import {
  FaChevronDown,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegCommentDots,
} from "react-icons/fa";

const faqs = [
  {
    question: "How many hours of lessons do you need to pass?",
    answer:
      "The number of hours varies, but most learners require between 20-40 hours of professional instruction to be test-ready.",
  },
  {
    question: "Is it better to have 1 or 2 hour driving lessons?",
    answer:
      "2 hour lessons are often more effective as they allow for more practice and less time spent on reviews and transitions.",
  },
  {
    question: "How many driving lessons do I need before test?",
    answer:
      "On average, 20-40 hours of lessons are recommended, but it depends on your confidence and ability.",
  },
  {
    question: "How to Handle Tailgaters on the Road?",
    answer:
      "Stay calm, maintain a safe speed, and avoid confrontation. If possible, safely let them pass.",
  },
  {
    question: "Which Traffic Rules Should I Follow for City Driving?",
    answer:
      "Always obey speed limits, traffic signals, and road signs. Stay alert and yield to pedestrians.",
  },
  {
    question: "How to Adjust Seating to the Proper Position While Driving?",
    answer:
      "Adjust your seat so you can reach pedals comfortably, sit upright, and have a clear view of the road.",
  },
  {
    question: "How to Get a Verified License Within 7 Days?",
    answer:
      "Complete all required lessons, pass the test, and submit your documents promptly for processing.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-myBgColor min-h-screen">
      {/* Banner Section */}
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
            Frequently Asked Question
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
        {/* FAQ Section */}
        <div className="flex-1">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-4 bg-gray-100 rounded-lg shadow">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 focus:outline-none"
                onClick={() => handleToggle(idx)}
              >
                {faq.question}
                <FaChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-700 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Get A Quote Form */}
        <div className="w-full md:w-96 bg-gray-50 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-500 inline-block pb-1">
            Get A Quote
          </h2>
          <form className="space-y-4">
            {/* First Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Last Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                placeholder="Your Message"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                rows={3}
              ></textarea>
              <FaRegCommentDots className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
