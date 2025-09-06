import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiPhone, FiMail, FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050A1F] text-white">

      {/* Call to Action Footer */}
      <div className="bg-myBg text-white py-8 flex flex-col md:flex-row items-center justify-between px-4 md:px-24 gap-4">
        <span className="text-xl sm:text-2xl font-semibold text-center md:text-left">
          Ready To Join Our Class?
        </span>
        <div className="flex items-center bg-blue-800 px-4 sm:px-6 py-3 rounded-lg w-full md:w-auto justify-center">
          <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          <span className="text-base sm:text-lg font-medium">
            +91 880-073-3355
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div>
            <img
              src="/logo.png"
              alt="Hari Motors"
              className="w-48 mb-4 bg-myBgColor"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Hari Motor Driving Training School is a legacy holder and the best
              driving school in South Delhi, providing world-class services since 1998.
            </p>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-600 inline-block">
              OFFICIAL INFO
            </h3>
            <p className="flex items-center gap-2 mt-3 text-gray-300">
              <FiPhone /> Call : +91 880-073-3355
            </p>
            <div className="flex gap-3 mt-4">
              <FaFacebookF className="hover:text-purple-500 cursor-pointer" />
              <FaTwitter className="hover:text-purple-500 cursor-pointer" />
              <FaInstagram className="hover:text-purple-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-purple-500 cursor-pointer" />
              <FaPinterestP className="hover:text-purple-500 cursor-pointer" />
              <FaYoutube className="hover:text-purple-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-600 inline-block">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 mt-3">
              {[
                { name: "About us", path: "/about" },
                { name: "Our Team", path: "/our-team" },
                { name: "Services", path: "/service" },
                { name: "Pricing Plan", path: "/pricing-plan" },
                { name: "Driving Guidelines", path: "/driving-guidelines" },
                { name: "FAQs", path: "/faqs" },
              ].map((link) => (
                <Link key={link.name} to={link.path} onClick={scrollToTop}>
                  <li className="flex items-center gap-2 text-gray-100 hover:text-gray-500 cursor-pointer">
                    <FiCircle size={8} /> {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-600 inline-block">
              NEWSLETTER
            </h3>
            <p className="text-gray-300 text-sm mt-3">
              Subscribe to our newsletter to get the latest updates & news.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your mail address"
                required
                className="p-2 w-full text-black rounded-l"
              />
              <button
                type="submit"
                className="bg-green-600 px-4 rounded-r hover:bg-green-500"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-800 pt-4">
          © {new Date().getFullYear()} Prime Motors Driving School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
