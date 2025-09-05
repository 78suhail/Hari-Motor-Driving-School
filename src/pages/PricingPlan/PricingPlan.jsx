import React from "react";
import { FaCheckCircle, FaRegCircle,FaChevronDown } from "react-icons/fa";
import CallToAction from './CallToAction'
import Testimonials from  '../Testimonials/Testimonials'

const pricingPlans = [
  {
    name: "Basic Package",
    price: 260,
    duration: "Per Course",
    features: [
      { text: "60 Mins Driving Lesson", available: true },
      { text: "Additional Time Available", available: true },
      { text: "2 Hour Highway Lesson", available: true },
      { text: "Car Rental For Road Test", available: false },
      { text: "7 Hour Pre-Licensing Course", available: false },
    ],
  },
  {
    name: "Standard Package",
    price: 410,
    duration: "Per Course",
    popular: true,
    features: [
      { text: "60 Mins Driving Lesson", available: true },
      { text: "Additional Time Available", available: true },
      { text: "2 Hour Highway Lesson", available: true },
      { text: "Car Rental For Road Test", available: true },
      { text: "7 Hour Pre-Licensing Course", available: false },
    ],
  },
  {
    name: "Premium Package",
    price: 840,
    duration: "Per Course",
    features: [
      { text: "60 Mins Driving Lesson", available: true },
      { text: "Additional Time Available", available: true },
      { text: "2 Hour Highway Lesson", available: true },
      { text: "Car Rental For Road Test", available: true },
      { text: "7 Hour Pre-Licensing Course", available: true },
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <div className="bg-myBgColor min-h-screen">
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
              Pricing Plans
            </h1>
            <div className="mt-4 animate-bounce">
              <FaChevronDown className="w-7 h-7 text-white mx-auto" />
            </div>
          </div>
        </div>
        <section className="py-16 bg-white">
          <div className="text-center mb-12">
            <h3 className="text-blue-600 font-semibold flex items-center justify-center gap-2">
              <span role="img" aria-label="plan">
                🎓
              </span>{" "}
              Pricing Plan
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Most Valuable Pricing Packages
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl shadow-md p-8 transition hover:shadow-lg ${
                  plan.popular ? "border-2 border-blue-600" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-4">
                  The Driving Instructors Association offers a diverse range.
                </p>
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  ${plan.price}
                  <span className="text-base text-gray-500">
                    {" "}
                    / {plan.duration}
                  </span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 ${
                        feature.available ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {feature.available ? (
                        <FaCheckCircle className="text-blue-600" />
                      ) : (
                        <FaRegCircle />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition">
                  Choose Packages →
                </button>
              </div>
            ))}
          </div>
        </section>
        <div>
          <CallToAction/>
        </div>
        <div className="mt-8 mb-8">
          <Testimonials/>
        </div>
      </div>
    </>
  );
};

export default Pricing;
