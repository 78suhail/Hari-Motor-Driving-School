import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isMobileBranchesOpen, setIsMobileBranchesOpen] = useState(false);

  useEffect(() => {
    setIsMobileBranchesOpen(false);
  }, [location.pathname]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(true);
    setClosing(false);
  };

  const handleMobileMenuClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setClosing(false);
    }, 400); // match tailwind animation duration
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#2563eb" : "black",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
  });

  const isBranchActive = location.pathname.startsWith("/branches");

  // ✅ All Branches
  const branches = [
    { path: "/branches/branch1", label: "Best Driving School Near Sheikh Sarai" },
    { path: "/branches/branch2", label: "Car Driving Training Near Lajpat Nagar" },
    { path: "/branches/branch3", label: "Car Driving School Near Lajpat Nagar 1" },
    { path: "/branches/branch4", label: "Driving School Near Hudco Place" },
    { path: "/branches/branch5", label: "Car Driving School in Vasant Kunj" },
    { path: "/branches/branch6", label: "Top Driving School Near Chattarpur" },
    { path: "/branches/branch7", label: "Car Driving School Near Katwaria Sarai" },
    { path: "/branches/branch8", label: "Car Driving Training Near Madangir" },
    { path: "/branches/branch9", label: "Car Driving School in Neb Sarai" },
    { path: "/branches/branch10", label: "Best Driving Training Near Nehru Place" },
    { path: "/branches/branch11", label: "Best Driving School Near Green Park Extension" },
    { path: "/branches/branch12", label: "Driving School Near Raja Dhirsain Marg" },
    { path: "/branches/branch13", label: "Driving School Near Sadiq Nagar" },
    { path: "/branches/branch14", label: "Car Driving Training in South Extension I" },
    { path: "/branches/branch15", label: "Car Driving School Near Sukhdev Vihar" },
    { path: "/branches/branch16", label: "Car Driving School Near Saket" },
    { path: "/branches/branch17", label: "Top Driving School Near Greater Kailash II" },
  ];

  return (
    <nav className="bg-myBgColor shadow relative mt-3 lg:mt-2">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About us</NavLink>

          {/* Branches Dropdown */}
          <div>
            <Button
              id="branches-button"
              aria-controls={open ? "branches-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={<FiChevronDown />}
              sx={{
                textTransform: "none",
                color: isBranchActive ? "#2563eb" : "black",
                fontWeight: isBranchActive ? "bold" : "normal",
                padding: 0,
                minWidth: "auto",
                fontSize: "1rem",
              }}
            >
              Branches
            </Button>
            <Menu
              id="branches-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "branches-button" }}
            >
              {branches.map((branch) => (
                <MenuItem
                  key={branch.path}
                  onClick={handleClose}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1e3a8a",
                      "& a": { color: "white" },
                    },
                    padding: 0,
                  }}
                >
                  <Link
                    to={branch.path}
                    className="w-full flex items-center px-4 py-2 space-x-2 text-black"
                  >
                    <FaMapMarkerAlt className="text-blue-600 group-hover:text-white" />
                    <span>{branch.label}</span>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </div>

          <NavLink to="/courses" style={linkStyle}>Courses</NavLink>
          <NavLink to="/our-team" style={linkStyle}>Our Team</NavLink>
          <NavLink to="/gallery" style={linkStyle}>Gallery</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact us</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMobileMenuToggle} className="p-2 focus:outline-none">
            <FiMenu size={28} />
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black bg-opacity-30"
              onClick={handleMobileMenuClose}
            ></div>

            <div
              className={`relative w-72 max-w-[80vw] h-full bg-white shadow-xl flex flex-col 
              ${closing ? "animate-slide-out-left" : "animate-slide-in-left"}`}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-4 py-4 bg-gray-50 border-b border-gray-200">
                <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                <button onClick={handleMobileMenuClose} className="ml-2 p-2 rounded-full hover:bg-blue-100">
                  <FiX size={28} className="black" />
                </button>
              </div>

              {/* Drawer Items */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                <NavLink to="/" style={linkStyle} onClick={handleMobileMenuClose} className="block py-2">Home</NavLink>
                <NavLink to="/about" style={linkStyle} onClick={handleMobileMenuClose} className="block py-2">About us</NavLink>

                {/* Mobile Branches */}
                <div>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between font-semibold py-2"
                    onClick={() => setIsMobileBranchesOpen((prev) => !prev)}
                  >
                    Branches
                    <FiChevronDown className={`ml-2 transition-transform ${isMobileBranchesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isMobileBranchesOpen && (
                    <div className="flex flex-col space-y-1 mt-1">
                      {branches.map((branch) => (
                        <NavLink
                          key={branch.path}
                          to={branch.path}
                          onClick={() => {
                            setIsMobileBranchesOpen(false);
                            setTimeout(() => handleMobileMenuClose(), 50);
                          }}
                          className={({ isActive }) =>
                            `flex items-center space-x-2 px-3 py-1 text-sm rounded ${
                              isActive
                                ? "bg-blue-600 text-white font-bold"
                                : "text-black hover:bg-blue-900"
                            }`
                          }
                        >
                          <FaMapMarkerAlt className="text-white bg-blue-600 p-1 rounded-full" />
                          <span>{branch.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>

                <NavLink to="/courses" style={linkStyle} onClick={handleMobileMenuClose} className="block py-2">Courses</NavLink>
                <NavLink to="/our-team" style={linkStyle} onClick={handleMobileMenuClose} className="block py-2">Our Team</NavLink>
                <NavLink to="/gallery" style={linkStyle} onClick={handleMobileMenuClose} className="block py-2">Gallery</NavLink>
                <NavLink to="/contact" style={linkStyle} onClick={handleMobileMenuClose} className="block py-2">Contact us</NavLink>

                <Link
                  to="/book"
                  onClick={handleMobileMenuClose}
                  className="bg-gray-800 text-white px-4 py-2 font-bold uppercase text-sm rounded block text-center mt-4"
                >
                  Book Now →
                </Link>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Book Now */}
        <div className="hidden md:block">
          <Link to="/book" className="bg-gray-800 text-white px-4 py-2 font-bold uppercase text-sm rounded hover:bg-gray-700">
            Book Now →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
