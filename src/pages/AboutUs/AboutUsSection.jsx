import React from "react";
import {
  FaChalkboardTeacher,
  FaClock,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import OurBestInstructor from "./OurBestInstructor";

const AboutUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3,     
  });

  const stats = [
    { icon: FaChalkboardTeacher, value: 20, label: "Teachers", suffix: "+" },
    { icon: FaClock, value: 1500, label: "Training Hours", suffix: "+" },
    { icon: FaCalendarAlt, value: 20, label: "Working Years", suffix: "+" },
    { icon: FaUserGraduate, value: 15000, label: "Trained Persons", suffix: "+" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-myBgColor">
      {/* Stats Section */}
      <div
        ref={ref}
        className="bg-myBg text-white py-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-y-6 gap-x-0 sm:gap-x-16"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full sm:w-auto px-6 py-4 border-b sm:border-b-0 sm:border-r border-white last:border-r-0"
          >
            <stat.icon className="text-3xl mb-2" />
            <span className="text-3xl font-bold">
              {inView ? (
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              ) : (
                "0"
              )}
            </span>
            <span className="mt-1 text-base">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Instructor Section */}
      <div>
        <OurBestInstructor />
      </div>
    </div>
  );
};

export default AboutUsSection;
