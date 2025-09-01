import React from "react";
import PricingPackages from "./PricingPackages";
import Testimonials from "../Testimonials/Testimonials";

const stats = [
  { value: "5,400+", label: "Learn Form Here" },
  { value: "1,350+", label: "Current Students" },
  { value: "150+", label: "Expert Instructor" },
  { value: "60+", label: "Best Award Win" },
];

const bgImage = "/Images/Banner/Banner3.jpg";

const CoursesStats = () => (
 <>
  <div
    className="relative w-full"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    <div className="relative max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20 text-center text-white">
        {stats.map((stat, idx) => (
          <div key={idx} className="py-10 px-2">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
            <div className="mt-2 text-base md:text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div>
    <PricingPackages/>
  </div>
  <div className="mb-6 ">
    <Testimonials/>
  </div>
 
 </>
);

export default CoursesStats;