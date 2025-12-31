import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  const socials = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaPinterestP />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="bg-myBg text-white fixed top-0 left-0 w-full z-50 py-1">
        <div
          className="
            max-w-7xl mx-auto
            px-4
            h-10 md:h-12
            flex items-center justify-between
            text-xs md:text-sm
          "
        >
          {/* Phone Number */}
          <a
            href="tel:+918800733355"
            className="flex items-center gap-1 whitespace-nowrap font-medium"
          >
            <FiPhone className="text-sm md:text-lg" />
            +91 880-073-3355
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 text-sm md:text-lg">
            {socials.map((s, i) => (
              <Link
                key={i}
                to={s.url}
                className="hover:text-gray-300 transition"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* SPACER */}
      <div className="h-10 md:h-12"></div>
    </>
  );
};

export default Header;
