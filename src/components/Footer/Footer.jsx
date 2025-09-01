import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FiPhone, FiMail, FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <footer className="bg-[#050A1F] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <img
            src="/prime-motor-logo.jpg"
            alt="Prime Motors"
            className="w-48 mb-4"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Prime Motor Driving Training School is a legacy holder and the best
            driving school in South Delhi, we have been providing world-class
            services since 1998, which makes us a suitable driving school to
            trust.
          </p>
        </div>

        {/* Official Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-600 inline-block">
            OFFICIAL INFO
          </h3>
          <p className="flex items-center gap-2 mt-3 text-gray-300">
            <FiPhone /> Call : +91 999-999-4613
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
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
           <Link to ="/about"onClick={scrollToTop}>
            <li className="flex items-center gap-2 text-gray-100 hover:text-gray-500 cursor-pointer">
              <FiCircle size={8} /> About us
            </li>
           </Link>
           <Link to="/our-team"onClick={scrollToTop}>
            <li className="flex items-center gap-2 text-gray-100  hover:text-gray-500 cursor-pointer">
              <FiCircle size={8} /> Our Team
            </li>
           </Link>
           <Link to="/service"onClick={scrollToTop}>
            <li className="flex items-center gap-2 text-gray-100  hover:text-gray-500 cursor-pointer">
              <FiCircle size={8} />Services
            </li>
           </Link>
           <Link to="/pricing-plan"onClick={scrollToTop}>
            <li className="flex items-center gap-2 text-gray-100  hover:text-gray-500 cursor-pointer">
              <FiCircle size={8} />Pricing Plan
            </li>
           </Link>
           <Link to="/driving-guidelines"onClick={scrollToTop}>
            <li className="flex items-center gap-2 text-gray-100  hover:text-gray-500 cursor-pointer">
              <FiCircle size={8} /> Driving Guidelines
            </li>
           </Link>
         <Link to="/faqs"onClick={scrollToTop}>
            <li className="flex items-center gap-2 text-gray-100  hover:text-gray-500 cursor-pointer">
              <FiCircle size={8} /> FAQs
            </li>
         </Link>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-600 inline-block">
            NEWSLETTER
          </h3>
          <p className="text-gray-300 text-sm mt-3">
            Subscribe our newsletter to get our latest update & news
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
    </footer>
  );
};

export default Footer;
