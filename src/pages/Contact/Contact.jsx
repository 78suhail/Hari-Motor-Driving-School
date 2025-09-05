import { useState } from 'react'
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPaperPlane, FaChevronDown 
} from 'react-icons/fa'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const socialIcons = [
    { icon: FaFacebook, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedin, href: '#' },
    { icon: FaYoutube, href: '#' }
  ]

  return (
    <div className="bg-myBgColor min-h-screen">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
        {/* Mobile Image */}
        <img
          src="/Images/AboutUs/man-driving-with-his-girlfriend.jpg"
          alt="Contact Hero Mobile"
          className="absolute inset-0 w-full h-full object-contain bg-black opacity-90 block md:hidden"
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
            Contact Us
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* ✅ Contact Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wider">Ask Anything</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Write Message</h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-vertical"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold 
                               flex items-center space-x-2 hover:bg-blue-800 
                               transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <FaPaperPlane className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden order-2 lg:order-1">
              <div className="bg-blue-900 text-white py-6 px-8">
                <h2 className="text-2xl font-bold">Contact Details</h2>
              </div>

              <div className="p-8 space-y-8">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-4 rounded-lg">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">CALL US</p>
                    <p className="text-gray-800 font-medium">+91 880-073-3355</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-4 rounded-lg">
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">EMAIL</p>
                    <p className="text-gray-800 font-medium break-all">info@Harimotorsdrivingschool.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-4 rounded-lg">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      A-208/2, 208-A1, Ground Floor,<br />
                      Savitri Nagar, Hostel Road,<br />
                      Malviya Nagar, New Delhi-110017
                    </p>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-3 pt-4">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-blue-900 p-3 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
