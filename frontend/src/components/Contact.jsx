import React, { useState , useEffect} from "react";
import { FaUser, FaEnvelope, FaPhone, FaPen, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.message) {
      alert("Please fill in all the details before submitting.");
      return;
    }

    // Refresh the page
    window.location.reload();
  };

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Left Side */}
      <div className="bg-yellow-100 p-6 rounded-lg w-full md:w-1/3 flex flex-col gap-6 my-12">
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-full shadow-md">
            <FaMapMarkerAlt className="text-green-500 text-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Our Address</h3>
            <p className="text-gray-600">ROHITZ FITTINGS (OPC) PRIVATE LIMITED</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-full shadow-md">
            <FaEnvelope className="text-green-500 text-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Email Address</h3>
            <p className="text-gray-600">rohitpvtltd001@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-full shadow-md">
            <FaPhone className="text-green-500 text-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Call Us</h3>
            <p className="text-gray-600">+91-9582133503</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white p-6 shadow-2xl rounded-lg w-full md:w-2/3">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center bg-yellow-100 p-3 rounded-md">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none"
              />
              <FaUser className="text-gray-500" />
            </div>
            <div className="flex items-center bg-yellow-100 p-3 rounded-md">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none"
              />
              <FaUser className="text-gray-500" />
            </div>
            <div className="flex items-center bg-yellow-100 p-3 rounded-md">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none"
              />
              <FaPhone className="text-gray-500" />
            </div>
            <div className="flex items-center bg-yellow-100 p-3 rounded-md">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none"
              />
              <FaEnvelope className="text-gray-500" />
            </div>
          </div>
          <div className="flex items-start bg-yellow-100 p-3 rounded-md mt-4">
            <textarea
              name="message"
              placeholder="Write Message..."
              value={formData.message}
              onChange={handleChange}
              className="flex-1 bg-transparent outline-none h-24"
            ></textarea>
            <FaPen className="text-gray-500" />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-md mt-4 font-semibold md:hover:bg-black md:hover:text-white transition duration-300 ease-in-out transform hover:scale-95"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
