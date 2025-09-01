import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar yahan AdminLayout se aa raha hai */}

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Admin!</h1>
            <p className="text-gray-500">
              Here’s what’s happening in your school today.
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              New Booking
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-blue-600 text-2xl font-bold">340</h2>
            <p className="text-gray-500">Total Students</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-green-600 text-2xl font-bold">12</h2>
            <p className="text-gray-500">Instructors</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-orange-500 text-2xl font-bold">8</h2>
            <p className="text-gray-500">Courses</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-purple-600 text-2xl font-bold">25</h2>
            <p className="text-gray-500">Upcoming Bookings</p>
          </div>
        </div>

        {/* Reports/Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4">
              Student Enrollment Growth
            </h2>
            <div className="h-40 flex items-center justify-center text-gray-400">
              (Chart goes here...)
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4">Bookings Overview</h2>
            <div className="h-40 flex items-center justify-center text-gray-400">
              (Chart goes here...)
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
