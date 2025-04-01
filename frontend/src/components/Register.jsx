import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash, FaPhone } from "react-icons/fa";
import axios from "axios"; // Using axios directly instead of an external authService

const API_URL = "https://ecommerce-production-0dc2.up.railway.app/api"

const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post(
                `${API_URL}/auth/register`,
                {
                    name: `${formData.firstName} ${formData.lastName}`,
                    phone: formData.phone,
                    email: formData.email,
                    password: formData.password,
                },
                { withCredentials: true } // ✅ Ensure cookies are handled
            );

            setSuccess("User registered successfully!");
            setTimeout(() => navigate("/login"), 1000); // Redirect after success
        } catch (error) {
            setError(error.response?.data?.message || "Registration failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center bg-white mb-10 mt-10 mx-5">
            <div className="bg-white shadow-lg border rounded-lg p-8 w-full max-w-3xl">
                <h2 className="text-2xl font-semibold text-center mb-6 italic">Register</h2>

                {/* Error & Success Messages */}
                {error && <p className="text-red-600 text-center">{error}</p>}
                {success && <p className="text-green-600 text-center">{success}</p>}

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        {/* First Name */}
                        <div className="relative">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md p-3 bg-yellow-100 placeholder-gray-600"
                            />
                            <FaUser className="absolute right-3 top-4 text-gray-600" />
                        </div>

                        {/* Last Name */}
                        <div className="relative">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md p-3 bg-yellow-100 placeholder-gray-600"
                            />
                            <FaUser className="absolute right-3 top-4 text-gray-600" />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md p-3 bg-yellow-100 placeholder-gray-600"
                            />
                            <FaPhone className="absolute right-3 top-4 text-gray-600" />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md p-3 bg-yellow-100 placeholder-gray-600"
                            />
                            <FaEnvelope className="absolute right-3 top-4 text-gray-600" />
                        </div>

                        {/* Password */}
                        <div className="relative col-span-1 md:col-span-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md p-3 bg-yellow-100 placeholder-gray-600"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-4 text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Login Link */}
                    <p className="text-gray-600 text-sm mb-4 text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-900">
                            Login Now
                        </Link>
                    </p>

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-700 text-white py-3 rounded-md font-bold hover:bg-black transition ease-in-out duration-300"
                    >
                        {loading ? "Registering..." : "REGISTER"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
