import React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const packages = [
  {
    name: "Basic Package",
    price: 260,
    features: [
      { label: "60 Mins Driving Lesson", included: true },
      { label: "Additional Time Available", included: true },
      { label: "2 Hour Highway Lesson", included: true },
      { label: "Car Rental For Road Test", included: false },
      { label: "7 Hour Pre-Licensing Course", included: false },
    ],
  },
  {
    name: "Standard Package",
    price: 410,
    popular: true,
    features: [
      { label: "60 Mins Driving Lesson", included: true },
      { label: "Additional Time Available", included: true },
      { label: "2 Hour Highway Lesson", included: true },
      { label: "Car Rental For Road Test", included: true },
      { label: "7 Hour Pre-Licensing Course", included: false },
    ],
  },
  {
    name: "Premium Package",
    price: 410,
    features: [
      { label: "60 Mins Driving Lesson", included: true },
      { label: "Additional Time Available", included: true },
      { label: "2 Hour Highway Lesson", included: true },
      { label: "Car Rental For Road Test", included: true },
      { label: "7 Hour Pre-Licensing Course", included: true },
    ],
  },
];

const PricingPackages = () => (
  <section className="py-14 bg-myBgColor">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-center text-4xl font-bold mb-4">Our Most Valuable Pricing Packages</h2>
      <p className="text-center text-gray-500 mb-12">The Driving Instructors Association offers a diverse range.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 ${pkg.popular ? 'border-blue-600' : 'border-transparent'}`}
          >
            {pkg.popular && (
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-2xl rounded-tr-2xl">POPULAR</span>
            )}
            <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
            <div className="flex items-end mb-6">
              <span className="text-blue-600 text-2xl font-bold mr-1">$</span>
              <span className="text-4xl font-extrabold">{pkg.price}</span>
              <span className="text-gray-500 ml-1">/ Per Course</span>
            </div>
            <ul className="w-full mb-8">
              {pkg.features.map((feature) => (
                <li
                  key={feature.label}
                  className={`flex items-center gap-2 py-1 text-base ${feature.included ? 'text-gray-800' : 'text-gray-400'}`}
                >
                  {feature.included ? (
                    <FaCheckCircle className="text-blue-600" />
                  ) : (
                    <FaRegCircle className="text-gray-400" />
                  )}
                  {feature.label}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
              CHOOSE PACKAGES
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingPackages;
