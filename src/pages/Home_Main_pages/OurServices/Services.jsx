// src/components/Services.jsx


import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaCar, FaIdCard, FaFemale } from "react-icons/fa";


const services = [
  {
    title: "Learn, Drive, Thrive",
    img: "/Images/OurService_img/car-buyer-liking-new-vehicle-interior-vehicle-dealership.jpg",
    description:
      "Learn to drive with confidence through our expert driving lessons. Whether you’re a beginner or need a refresher, our certified instructors offer patient, personalized training tailored to your skill level.",
    icon: <FaCar className="text-3xl mb-2" />,
  },
  {
    title: "License Lift Courses",
    img: "/Images/OurService_img/handsome-male-taxi-driver-costume.jpg",
    description:
      "Our License Assistance service guides you through every step of the process—from application and document preparation to booking tests and understanding requirements.",
    icon: <FaIdCard className="text-3xl mb-2" />,
  },
  {
    title: "Women-Only Training",
    img: "/Images/OurService_img/portrait-brunette-woman-her-car.jpg",
    description:
      "Our Women-Only Training program offers a safe, supportive, and empowering environment for women to learn driving with confidence.",
    icon: <FaFemale className="text-3xl mb-2" />,
  },
];

const Services = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-8 px-2 sm:px-4 md:px-8 lg:px-16 bg-white">
      {/* Section Header */}
      <h4 className="text-sm font-semibold text-indigo-900 uppercase tracking-wider text-center">
        Our Services
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mt-2 text-center">
        We Provide Service For You
      </h2>
      <div className="mt-8 flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto w-full">
        {/* Sidebar */}
        <div className="bg-white rounded-xl shadow p-2 sm:p-4 flex flex-row lg:flex-col gap-2 lg:gap-4 w-full lg:w-80 lg:min-w-[240px] max-h-32 lg:max-h-[420px] overflow-x-auto lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
          {services.map((service, idx) => (
            <button
              key={service.title}
              onClick={() => setSelected(idx)}
              className={`flex justify-center items-center gap-2 sm:gap-3 px-2 sm:px-4 py-3 sm:py-4 rounded-lg transition font-medium w-full border-2 lg:border-0 min-h-[48px] sm:min-h-[56px] ${selected === idx ? "bg-indigo-50 text-indigo-900 border-indigo-600" : "hover:bg-gray-50 text-gray-700 border-transparent"}`}
              style={{ outline: "none", minWidth: 0 }}
            >
              <span className="text-indigo-600 text-xl sm:text-2xl lg:text-3xl flex items-center justify-center">{service.icon}</span>
              <span className="hidden sm:inline text-xs sm:text-base lg:text-lg whitespace-nowrap">{service.title}</span>
            </button>
          ))}
        </div>
        {/* Main Service Detail */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <Card className="w-full max-w-xl sm:max-w-2xl mx-auto shadow-lg rounded-xl">
            <CardMedia
              component="img"
              image={services[selected].img}
              alt={services[selected].title}
              className="w-full h-44 sm:h-64 object-cover rounded-t-xl"
              sx={{ objectFit: "cover", borderRadius: "16px 16px 0 0", height: { xs: 180, sm: 260 } }}
            />
            <CardContent className="text-center">
              <Typography gutterBottom variant="h6" component="div" className="font-bold text-indigo-900 uppercase mt-2 text-base sm:text-lg md:text-xl">
                {services[selected].title}
              </Typography>
              <Typography variant="body1" color="text.secondary" className="mt-2 text-gray-600 text-xs sm:text-base leading-relaxed">
                {services[selected].description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
