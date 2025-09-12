import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FaCar, FaIdCard, FaFemale } from "react-icons/fa";

const services = [
  {
    title: "Driving Lessons",
    img: "/Images/OurService_img/OurServices_1.webp",
    description:
      "Learn to drive with confidence through our expert driving lessons. Whether you’re a beginner or need a refresher, our certified instructors offer patient, personalized training tailored to your skill level.",
    icon: <FaCar className="text-3xl mb-2" />,
  },
  {
    title: "License Assistance",
    img: "/Images/OurService_img/OurServices_2.webp",
    description:
      "Our License Assistance service guides you through every step of the process—from application and document preparation to booking tests and understanding requirements.",
    icon: <FaIdCard className="text-3xl mb-2" />,
  },
  {
    title: "Women-Only Training",
    img: "/Images/OurService_img/OurServices_3.webp",
    description:
      "Our Women-Only Training program offers a safe, supportive, and empowering environment for women to learn driving with confidence.",
    icon: <FaFemale className="text-3xl mb-2" />,
  },
];

const OurServices = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-14 px-2 sm:px-4 md:px-8 lg:px-16 bg-myBgColor">
      {/* Section Header */}
      <h4 className="text-sm font-semibold text-blue-800 uppercase tracking-wider text-center">
        Our Services
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2 text-center ">
        We Provide Service For You
      </h2>

      <div className="mt-8 flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto w-full">
        {/* Sidebar */}
        <div className="bg-gray-50 rounded-xl border-2 shadow p-2 sm:p-4 flex flex-row lg:flex-col gap-2 lg:gap-4 w-full lg:w-80 lg:min-w-[240px] max-h-32 lg:max-h-[420px] overflow-x-auto lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
          {services.map((service, idx) => (
            <button
              key={service.title}
              onClick={() => setSelected(idx)}
              className={`flex justify-center items-center gap-2 sm:gap-3 px-2 sm:px-4 py-3 sm:py-4 rounded-lg transition font-medium w-full border-2 lg:border-0 min-h-[48px] sm:min-h-[56px] ${
                selected === idx
                  ? "bg-indigo-50 text-blue-900 border-blue-600"
                  : "hover:bg-gray-50 text-gray-700 border-transparent"
              }`}
              style={{ outline: "none", minWidth: 0 }}
            >
              <span className="text-blue-800 text-xl sm:text-2xl lg:text-3xl flex items-center justify-center">
                {service.icon}
              </span>
              <span className="hidden sm:inline text-xs sm:text-base lg:text-lg whitespace-nowrap">
                {service.title}
              </span>
            </button>
          ))}
        </div>

        {/* Main Service Detail */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <Card className="w-full max-w-xl sm:max-w-2xl mx-auto shadow-lg rounded-xl overflow-hidden">
            {/* Image with Hover Zoom */}
            <div className="relative w-full h-44 sm:h-64 overflow-hidden">
              <img
                src={services[selected].img}
                alt={services[selected].title}
                className="w-full h-full object-cover animate-zoom cursor-pointer"
              />
            </div>

            {/* Content */}
            <CardContent className="text-center">
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="font-bold text-blue-800 uppercase mt-2 text-base sm:text-lg md:text-xl"
              >
                {services[selected].title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                className="mt-2 text-gray-600 text-xs sm:text-base leading-relaxed "
              >
                {services[selected].description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
