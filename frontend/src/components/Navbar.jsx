import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaSignInAlt, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import Logo from "../assests/logo.png";

const API_URL = "https://ecommerce-production-aa96.up.railway.app/api"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    // ✅ Fetch authentication status from the backend
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const res = await axios.get(`${API_URL}/auth/me`, {
                    withCredentials: true,
                });
    
                if (res.data && res.data.user) {
                    setIsAuthenticated(true);
                    setUserName(res.data.user.name);
                    localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user details
                } else {
                    throw new Error("Invalid response");
                }
            } catch (error) {
                setIsAuthenticated(false);
                setUserName("");
                localStorage.removeItem("user"); // Clear on failure
            }
        };
    
        checkAuthStatus();
    }, []);
    


    // ✅ Logout Function (Uses API Instead of LocalStorage)
    const handleLogout = async () => {
        try {
            await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
            setIsAuthenticated(false);
            setUserName("");
            localStorage.removeItem("user"); // Clear stored user details
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error.response ? error.response.data : error.message);
        }
    };
    

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            {/* Main Navbar */}
            <nav className="flex items-center justify-between p-6 bg-white border-t-[15px] border-red-700 w-full z-50 relative">
                <div className="flex items-center gap-5">
                    <Link to="/">
                        <img loading="lazy" src={Logo} alt="Logo" className="h-14 w-14 scale-150" />
                    </Link>
                    <ul className="hidden md:flex gap-5 font-semibold">
                        <li><Link to="/" className="hover:text-red-700">HOME</Link></li>
                        <li><Link to="/about" className="hover:text-red-700">ABOUT US</Link></li>
                        <li><Link to="/shopwithus" className="hover:text-red-700">SHOP WITH US</Link></li>
                        <li><Link to="/contact" className="hover:text-red-700">CONTACT US</Link></li>
                    </ul>
                </div>

                {/* Right Side: Login, Cart, and Menu */}
                <div className="flex items-center gap-4 z-50">
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2"
                        >
                            <FaSignOutAlt /> Hi, {userName}
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="bg-red-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
                                <FaSignInAlt /> <span className="md:inline">Login</span>
                            </button>
                        </Link>
                    )}

                    <Link to={isAuthenticated ? "/cart" : "/login"}>
                        <button className="bg-red-700 text-white p-2 rounded-md">
                            <FaShoppingCart />
                        </button>
                    </Link>

                    {/* 🍔 Burger Menu */}
                    <button className="text-xl md:text-2xl z-50" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Sidebar with Animation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Background Overlay */}
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>

                        {/* Sidebar */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-[300px] md:w-[400px] bg-white shadow-lg z-50 p-5 flex flex-col"
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {/* Sidebar Header */}
                            <div className="flex justify-between items-center mb-4">
                                <Link to="/" onClick={toggleMenu}>
                                    <img src={Logo} alt="Logo" className="h-14 w-14 scale-150" />
                                </Link>
                                <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
                            </div>
                            <hr className="mb-4" />

                            {/* Mobile Nav Links */}
                            <ul className="text-lg font-semibold space-y-4 md:hidden">
                                <li><Link to="/" className="block hover:text-red-700" onClick={toggleMenu}>HOME</Link></li>
                                <li><Link to="/about" className="block hover:text-red-700" onClick={toggleMenu}>ABOUT US</Link></li>
                                <li><Link to="/shopwithus" className="block hover:text-red-700" onClick={toggleMenu}>SHOP WITH US</Link></li>
                                <li><Link to="/contact" className="block hover:text-red-700" onClick={toggleMenu}>CONTACT US</Link></li>
                            </ul>

                            {/* Desktop-specific Content */}
                            <div className="hidden md:block mt-6">
                                <h2 className="text-xl font-bold">About Happy Shopping Bag Cart</h2>
                                <p className="text-gray-600 text-sm mt-2">
                                    At ROHITZ FITTINGS (OPC) PRIVATE LIMITED, we believe that the right pair of shoes is more than just footwear—it’s a statement of style, comfort, and confidence. As a dedicated shoe-selling company, we bring a diverse collection of premium-quality footwear that caters to every need, from casual wear to formal and sports shoes.
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
