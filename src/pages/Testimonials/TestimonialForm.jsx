import React, { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaCommentDots,
  FaImage,
  FaChevronDown,
  FaPaperPlane,
} from "react-icons/fa";

const TestimonialForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    feedback: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // ✅ Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.feedback) {
      return alert("⚠️ Please fill all fields!");
    }

    const newTestimonial = {
      name: form.name,
      role: form.role,
      feedback: form.feedback,
      image: form.image
        ? URL.createObjectURL(form.image)
        : "/Images/placeholder-user.png",
    };

    onSubmit(newTestimonial);
    setForm({ name: "", role: "", feedback: "", image: null });
    setPreview(null);
  };

  return (
    <>
      {/* ✅ Hero Section */}
      <section className="relative w-full h-64 md:h-80 flex items-center justify-center">
        {/* Mobile Image */}
        <img
          src="/Images/AboutUs/man-driving-with-his-girlfriend.jpg"
          alt="Contact Hero Mobile"
          className="absolute inset-0 w-full h-full object-cover opacity-90 block md:hidden"
        />

        {/* Desktop Image */}
        <img
          src="/Images/ContactUs/route-discussion-rainy-drive-driver-girl.jpg"
          alt="Contact Hero Desktop"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 hidden md:block"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Share Your Feedback
          </h1>
          <p className="text-gray-200 mt-2 text-sm sm:text-base max-w-md">
            We value your experience with us. Please take a moment to submit
            your testimonial.
          </p>
          <div className="mt-6 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </section>

      {/* ✅ Feedback Form */}
      <section className="max-w-2xl mx-auto my-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            Feedback
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Your Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Role
              </label>
              <div className="relative">
                <FaBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="e.g., Driving Student"
                  className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Feedback */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Feedback
              </label>
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  name="feedback"
                  rows={4}
                  value={form.feedback}
                  onChange={handleChange}
                  placeholder="Write your feedback here..."
                  className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Photo (optional)
              </label>
              <div className="relative">
                <FaImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 pl-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Preview (if image selected) */}
            {preview && (
              <div className="flex justify-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-full border shadow-md"
                />
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition duration-200"
            >
              <FaPaperPlane />
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default TestimonialForm;
