import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGraduationCap,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const instructors = [
  {
    name: "Mac Alexixe",
    role: "CEO, of Founder",
    image:
      "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
  {
    name: "Alex Julian",
    role: "Instructor",
    image: "/Images/TeamSection_img/young-bearded-man-with-striped-shirt.jpg",
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
  {
    name: "Jenifer Lopez",
    role: "Instructor",
    image:
      "/Images/TeamSection_img/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
  },
];

const OurBestInstructor = () => {
  return (
    <div className="bg-myBgColor flex flex-col items-center py-16 px-6">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-6">
        <span className="text-blue-600 text-2xl mb-1 flex items-center">
          <FaGraduationCap className="mr-2" />
          Our Best Instructor
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          Meet Our Qualified Instructor
        </h2>
      </div>

      {/* Swiper Slider Section */}
      <div className="w-full max-w-6xl mx-auto">
        <Swiper
          spaceBetween={32}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-6"
        >
          {instructors.map((inst, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-myBgColor rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs mx-auto p-6 relative group transition-all duration-150 ease-out border-2 border-gray-200 hover:border-blue-500">
                {/* Image Section */}
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 relative group/image cursor-pointer">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-full object-cover object-center transition-transform duration-200 ease-out group-hover/image:scale-110"
                  />
                  {/* Socials */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out pr-2">
                    {inst.socials.map((s, i) => (
                      <a
                        key={i}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow p-2 rounded-full text-blue-700 hover:bg-blue-600 hover:text-white transition duration-150 ease-out cursor-pointer"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Name + Role */}
                <div className="text-xl font-bold text-gray-900 mb-1">
                  {inst.name}
                </div>
                <div className="text-blue-600 font-semibold text-sm mb-4">
                  {inst.role}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurBestInstructor;
