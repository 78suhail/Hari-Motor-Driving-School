import { Link } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaCar,
  FaCalendarAlt,
  FaEnvelope,
  FaMoneyBillWave,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-[#1e293b] text-white flex flex-col min-h-screen">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold">🚗 Talent Motor</h1>
        <p className="text-sm text-gray-400">Admin Panel</p>
      </div>

      {/* Menu Section */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/admin"
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
        >
          <FaChartBar /> <span>Dashboard</span>
        </Link>

        <Link
          to="/admin/about"
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
        >
          <FaUserGraduate /> <span>Students</span>
        </Link>

        <Link
          to="/admin/courses"
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
        >
          <FaChalkboardTeacher /> <span>Instructors</span>
        </Link>

        <Link
          to="/admin/team"
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
        >
          <FaCar /> <span>Courses</span>
        </Link>

        <Link
          to="/admin/gallery"
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
        >
          <FaCalendarAlt /> <span>Bookings</span>
        </Link>

        <Link
          to="/admin/contact"
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
        >
          <FaEnvelope /> <span>Messages</span>
        </Link>

        <Link
          to="/admin/services"
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
        >
          <FaMoneyBillWave /> <span>Payments</span>
        </Link>
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-700">
        <Link
          to="/logout"
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-red-600"
        >
          <FaSignOutAlt /> <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
