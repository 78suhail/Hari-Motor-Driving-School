import React from "react";
import { FaUserShield, FaMobileAlt, FaChevronDown } from "react-icons/fa";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SpeedIcon from "@mui/icons-material/Speed";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SeatIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import TrafficIcon from "@mui/icons-material/Traffic";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const guidelines = [
  {
    title: "Keep a safe distance",
    desc: "Keep a safe distance from the vehicle in front of you and avoid tailgating.",
    icon: <DirectionsCarIcon className="text-3xl text-gray-700" />,
  },
  {
    title: "Speed Limit",
    desc: "Follow the speed limit and adjust your speed according to the road conditions.",
    icon: <SpeedIcon className="text-3xl text-gray-700" />,
  },
  {
    title: "Turning Signal Light On",
    desc: "Use your turn signal before changing lanes or turning and check your blind spots.",
    icon: <SignalCellularAltIcon className="text-3xl text-gray-700" />,
  },
  {
    title: "Seat Belt",
    desc: "Wear your seat belt and make sure your passengers do the same.",
    icon: <SeatIcon className="text-3xl text-gray-700" />,
  },
  {
    title: "Avoid Distractions",
    desc: "Avoid distractions such as using your phone, eating, or drinking while driving.",
    icon: <FaMobileAlt className="text-3xl text-gray-700" />,
  },
  {
    title: "Drive Sober",
    desc: "Drive sober and drug-free, and avoid driving when you are tired or drowsy.",
    icon: <NoDrinksIcon className="text-3xl text-gray-700" />,
  },
  {
    title: "Practice Defensive Driving",
    desc: "Stay alert, cautious, and courteous while driving defensively.",
    icon: <NotificationsActiveIcon className="text-3xl text-gray-700" />,
  },
  {
    title: "Know Traffic Laws",
    desc: "Understand local traffic laws and signs, and follow them accordingly.",
    icon: <TrafficIcon className="text-3xl text-gray-700" />,
  },
];

const DrivingGuidelines = () => {
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
               Driving Guidelines
            </h1>
            <div className="mt-4 animate-bounce">
              <FaChevronDown className="w-7 h-7 text-white mx-auto" />
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col items-center py-8 px-2 pb-10">
          {/* Title Section */}
          <div className="flex flex-col items-center mb-2">
            <span className="text-blue-600 text-2xl mb-1 flex items-center">
              <FaUserShield className="mr-2" />
              Driving Guidelines
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mt-2">
              Our Experience is Your Advantage <br /> Guidelines
            </h2>
          </div>

          {/* Main Content */}
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">
            <div className="relative w-full flex flex-col md:flex-row items-center justify-center">
              {/* Left Guidelines */}
              <div className="flex-1 flex flex-col gap-8 items-end pr-2">
                {guidelines.slice(0, 4).map((g) => (
                  <div
                    key={g.title}
                    className="flex items-center gap-3 max-w-xs"
                  >
                    <div className="flex-shrink-0">{g.icon}</div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">
                        {g.title}
                      </div>
                      <div className="text-gray-500 text-sm">{g.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Icon */}
              <div className="flex-shrink-0 mx-8 my-8 md:my-0">
                <div className="rounded-full border-4 border-dashed border-blue-400 flex items-center justify-center w-56 h-56 md:w-72 md:h-72 bg-blue-50 mx-auto">
                  <FaUserShield className="text-blue-500 text-[90px] md:text-[120px]" />
                </div>
              </div>

              {/* Right Guidelines */}
              <div className="flex-1 flex flex-col gap-8 items-start pl-2">
                {guidelines.slice(4).map((g) => (
                  <div
                    key={g.title}
                    className="flex items-center gap-3 max-w-xs"
                  >
                    <div className="flex-shrink-0">{g.icon}</div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">
                        {g.title}
                      </div>
                      <div className="text-gray-500 text-sm">{g.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrivingGuidelines;
