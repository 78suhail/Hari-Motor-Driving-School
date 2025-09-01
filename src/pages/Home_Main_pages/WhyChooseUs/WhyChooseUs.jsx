import React from "react";
import { FaCheck, FaCarSide, FaIdCard, FaRoad, FaClock } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-white pb-4">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          
          {/* LEFT SIDE */}
          <div className="flex-1">
            {/* <p className="text-gray-500 italic">Who We Are</p> */}
            <h2 className="text-4xl font-bold mt-2 relative inline-block">
              Why Choose Us
              <span className="block w-12 h-0.5 bg-blue-600 mt-2"></span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
              ad litora torquent per idunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            </p>

            {/* BULLET POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mt-6">
              {[
                "Safety Driving",
                "Traffic Rules",
                "Following Rules & Regulations",
                "Special classes",
                "Standard vehicles",
                "Experienced Instructors"
              ].map((item, i) => (
                <p key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheck className="text-blue-600" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/Images/WhyChoose/WhyChoose.jpg"
              alt="Happy Students"
              className="max-w-full lg:max-w-md"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURE BAR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FaCarSide size={28} />, title: "COMFORT VEHICLES" },
          { icon: <FaIdCard size={28} />, title: "LICENSED TRAINING" },
          { icon: <FaRoad size={28} />, title: "DRIVING PRACTICE" },
          { icon: <FaClock size={28} />, title: "FLEXIBLE SCHEDULE" }
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-gray-900 hover:bg-gray-800 text-white flex flex-col items-center justify-center py-6 px-4 gap-3 transition-colors"
          >
            {feature.icon}
            <p className="font-semibold text-center">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
