import React from "react";
import { FaCheck, FaCarSide, FaIdCard, FaRoad, FaClock } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-myBgColor ">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">
        {/* CENTERED HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold relative inline-block text-blue-900">
            Why Choose Us
            <span className="block w-16 h-1 bg-blue-600 mt-3 mx-auto rounded"></span>
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* LEFT SIDE TEXT */}
          <div className="flex-1">
            <p className="mt-4 text-gray-600 leading-relaxed text-center lg:text-left font-sans text-[18px]">
              At our driving academy, we prioritize safety, skill, and
              confidence. Our certified instructors provide personalized
              training using modern vehicles and proven teaching methods,
              ensuring every student becomes a responsible and confident driver.
              Join us to experience professional guidance and a seamless
              learning journey.
            </p>

            {/* BULLET POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mt-6 text-center lg:text-left font-sans text-[18px]">
              {[
                "Safety Driving",
                "Traffic Rules",
                "Following Rules & Regulations",
                "Special Classes",
                "Standard Vehicles",
                "Experienced Instructors",
              ].map((item, i) => (
                <p
                  key={i}
                  className="flex items-center justify-center lg:justify-start gap-2 text-gray-700"
                >
                  <FaCheck className="text-blue-600" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/Images/WhyChoose/why.webp"
                alt="Happy Students"
                className="max-w-full lg:max-w-sm transform transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer animate-zoom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURE BAR */}
      <div className="px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-50">
          {[
            { icon: <FaCarSide size={28} />, title: "COMFORT VEHICLES" },
            { icon: <FaIdCard size={28} />, title: "LICENSED TRAINING" },
            { icon: <FaRoad size={28} />, title: "DRIVING PRACTICE" },
            { icon: <FaClock size={28} />, title: "FLEXIBLE SCHEDULE" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-myBg hover:bg-blue-900 text-white flex flex-col items-center justify-center py-7 px-4 gap-3 transition-colors border-b border-r border-gray-50 rounded-md"
            >
              {feature.icon}
              <p className="font-semibold text-center">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
