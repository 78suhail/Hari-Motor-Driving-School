// NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <FaExclamationTriangle className="text-red-600 w-20 h-20 mb-6" />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
