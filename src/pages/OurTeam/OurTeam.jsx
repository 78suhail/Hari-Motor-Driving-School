import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";

const defaultSocials = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
];

const teamMembers = [
  {
    name: "Mac Alexixe",
    role: "CEO & Founder",
    image:
      "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
    socials: defaultSocials,
    highlight: true,
  },
  {
    name: "Alex Julian",
    role: "Instructor",
    image: "/Images/TeamSection_img/young-bearded-man-with-striped-shirt.jpg",
    socials: defaultSocials,
  },
  {
    name: "Jenifer Lopez",
    role: "Instructor",
    image:
      "/Images/TeamSection_img/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
    socials: defaultSocials,
  },
  {
    name: "Henry Joseph",
    role: "Senior Instructor",
    image:
      "/Images/TeamSection_img/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
    socials: defaultSocials,
  },
  {
    name: "Mac Alexixe",
    role: "CEO & Founder",
    image:
      "/Images/TeamSection_img/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses.jpg",
    socials: defaultSocials,
    highlight: true,
  },
  {
    name: "Alex Julian",
    role: "Instructor",
    image: "/Images/TeamSection_img/young-bearded-man-with-striped-shirt.jpg",
    socials: defaultSocials,
  },
  {
    name: "Jenifer Lopez",
    role: "Instructor",
    image:
      "/Images/TeamSection_img/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
    socials: defaultSocials,
  },
  {
    name: "Henry Joseph",
    role: "Senior Instructor",
    image:
      "/Images/TeamSection_img/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
    socials: defaultSocials,
  },
];

const TeamCard = ({ member }) => (
  <div className="relative rounded-2xl shadow-lg bg-white flex flex-col items-center p-4 transition-all duration-300 border-2 border-transparent hover:border-blue-500">
    <div className="relative group w-56 h-56 mb-4 overflow-hidden rounded-xl">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
      {member.socials?.length > 0 && (
        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300">
          {member.socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow p-2 rounded-full text-blue-700 hover:bg-blue-600 hover:text-white transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
      )}
    </div>
    <div className="text-xs text-blue-700 font-semibold mb-1">
      {member.role}
    </div>
    <div className="text-lg font-bold text-gray-900 mb-2">{member.name}</div>
  </div>
);

const MEMBERS_PER_PAGE = 8;

const OurTeam = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(teamMembers.length / MEMBERS_PER_PAGE);

  const startIdx = (currentPage - 1) * MEMBERS_PER_PAGE;
  const currentMembers = teamMembers.slice(
    startIdx,
    startIdx + MEMBERS_PER_PAGE
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="bg-white min-h-screen pb-12">
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
            Our Team
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>
      {/* Team Grid */}
      <div className="max-w-6xl mx-auto py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentMembers.map((member, idx) => (
          <TeamCard key={startIdx + idx} member={member} />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          size="large"
        />
      </div>
    </div>
  );
};

export default OurTeam;
