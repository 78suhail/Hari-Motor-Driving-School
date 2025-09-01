import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileBranchesOpen, setIsMobileBranchesOpen] = useState(false);

  useEffect(() => {
    setIsMobileBranchesOpen(false);
  }, [location.pathname]);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#2563eb" : "black",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
  });

  // Check if current path is any branch
  const isBranchActive = location.pathname.startsWith("/branches");

  const branches = [
    {
      path: "/branches/branch1",
      label: "Best Driving School Near Green Park Extension",
    },
    {
      path: "/branches/branch2",
      label: "Best Driving School Near Sheikh Sarai",
    },
    {
      path: "/branches/branch3",
      label: "Best Driving Training Near Nehru Place",
    },
    { path: "/branches/branch4", label: "Car Driving School in Neb Sarai" },
    {
      path: "/branches/branch5",
      label: "Car Driving School Near Katwaria Sarai",
    },
  ];

  return (
    <nav className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/prime-motor-logo.jpg"
            alt="Logo"
            className="h-12 w-auto"
            style={{ marginRight: "0.5rem" }}
          />
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About us
          </NavLink>

          {/* Our Branches Button */}
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
                      backgroundColor: "#1F2937",
                      "& a": { color: "white" },
                    },
                    padding: 0,
                  }}
                >
                  <Link
                    to={branch.path}
                    className="w-full block px-4 py-2 text-black"
                  >
                    {branch.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </div>

          <NavLink to="/courses" style={linkStyle}>
            Courses
          </NavLink>
          <NavLink to="/our-team" style={linkStyle}>
            Our Team
          </NavLink>
          <NavLink to="/gallery" style={linkStyle}>
            Gallery
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact us
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile  */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMobileMenuToggle}
            className="p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <FiMenu size={28} />
          </button>
        </div>

        {/* Drawer Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black bg-opacity-30"
              onClick={handleMobileMenuClose}
            ></div>
            {/* Drawer */}
            <div className="relative w-72 max-w-[80vw] h-full bg-white shadow-xl flex flex-col animate-slide-in-left">
              {/* Logo and Close Button */}
              <div className="flex items-center justify-between px-4 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <img
                    src="/prime-motor-logo.jpg"
                    alt="Logo"
                    className="h-12 w-auto"
                    style={{ marginRight: "0.5rem" }}
                  />
                </div>
                <button
                  onClick={handleMobileMenuClose}
                  className="ml-2 p-2 rounded-full hover:bg-blue-100 focus:outline-none"
                >
                  <FiX size={28} className="text-blue-600" />
                </button>
              </div>
              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                <NavLink
                  to="/"
                  style={linkStyle}
                  onClick={handleMobileMenuClose}
                  className="flex items-center text-base font-semibold py-2 px-2 rounded hover:bg-blue-50"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  style={linkStyle}
                  onClick={handleMobileMenuClose}
                  className="flex items-center text-base font-semibold py-2 px-2 rounded hover:bg-blue-50"
                >
                  About us
                </NavLink>
                {/* Branches Dropdown for Mobile */}
                <div className="w-full">
                  <button
                    type="button"
                    className="w-full pl-2 flex items-center justify-between text-black font-semibold mb-1 focus:outline-none"
                    onClick={() => setIsMobileBranchesOpen((prev) => !prev)}
                  >
                    Branches
                    <FiChevronDown
                      className={`ml-2 transition-transform duration-200 ${
                        isMobileBranchesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isMobileBranchesOpen && (
                    <div className="flex flex-col space-y-1 mt-1">
                      {branches.map((branch) => (
                        <NavLink
                          key={branch.path}
                          to={branch.path}
                          style={linkStyle}
                          className={({ isActive }) =>
                            `block px-3 py-1 text-sm rounded transition-colors duration-150 ${
                              isActive
                                ? "bg-blue-100 text-blue-700 font-bold"
                                : "text-black hover:bg-blue-50 focus:bg-blue-100 active:bg-blue-200"
                            }`
                          }
                          onClick={() => {
                            setIsMobileBranchesOpen(false);
                            setTimeout(() => {
                              handleMobileMenuClose();
                            }, 50);
                          }}
                        >
                          {branch.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>

                <NavLink
                  to="/courses"
                  style={linkStyle}
                  onClick={handleMobileMenuClose}
                  className="flex items-center text-base font-semibold py-2 px-2 rounded hover:bg-blue-50"
                >
                  Courses
                </NavLink>
                <NavLink
                  to="/our-team"
                  style={linkStyle}
                  onClick={handleMobileMenuClose}
                  className="flex items-center text-base font-semibold py-2 px-2 rounded hover:bg-blue-50"
                >
                  Our Team
                </NavLink>
                <NavLink
                  to="/gallery"
                  style={linkStyle}
                  onClick={handleMobileMenuClose}
                  className="flex items-center text-base font-semibold py-2 px-2 rounded hover:bg-blue-50"
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/contact"
                  style={linkStyle}
                  onClick={handleMobileMenuClose}
                  className="flex items-center text-base font-semibold py-2 px-2 rounded hover:bg-blue-50"
                >
                  Contact us
                </NavLink>
                <Link
                  to="/book"
                  className="bg-gray-800 text-white px-4 py-2 font-bold uppercase text-sm hover:bg-gray-700 mt-4 w-full text-center rounded block"
                  onClick={handleMobileMenuClose}
                >
                  Book Now →
                </Link>
              </nav>
            </div>
          </div>
        )}

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/book"
            className="bg-gray-800 text-white px-4 py-2 font-bold uppercase text-sm hover:bg-gray-700"
          >
            Book Now →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
