import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setError(null);

    //     try {
    //         const res = await axios.post(
    //             "http://localhost:5000/api/auth/login",
    //             { email, password },
    //             { withCredentials: true } // ✅ Send cookies with request
    //         );

    //         if (res.data.success) {
    //             navigate("/");
    //         } else {
    //             setError(res.data.message || "Invalid credentials, please try again.");
    //         }
    //     } catch (error) {
    //         setError(error.response?.data?.message || "Login failed. Please check your credentials.");
    //         console.error("Login Error:", error.response?.data || error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    
        console.log("Sending Email:", email);
        console.log("Sending Password:", password); // ✅ Log password before sending
    
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                { email, password },
                { withCredentials: true }
            );
    
            if (res.data.success) {
                navigate("/");
                window.location.reload();
            } else {
                setError(res.data.msg || "Invalid credentials, please try again.");
            }
        } catch (error) {
            setError(error.response?.data?.msg || "Login failed. Please check your credentials.");
            console.error("Login Error:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="flex justify-center items-center bg-white mb-10 mt-10 mx-5">
            <div className="bg-white shadow-lg border rounded-lg p-8 w-full max-w-3xl">
                <h2 className="text-2xl font-semibold text-center mb-6 italic">Login</h2>

                {/* Error Message */}
                {error && <p className="text-red-600 text-center">{error}</p>}

                {/* Form */}
                <form onSubmit={handleLogin}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded-md p-3 bg-yellow-100 placeholder-gray-600"
                            />
                            <FaEnvelope className="absolute right-3 top-4 text-gray-600" />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                    {/* Register Link */}
                    <p className="text-gray-600 text-sm mb-4 text-center">
                        Not registered yet?{" "}
                        <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-900">
                            Register Now
                        </Link>
                    </p>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-700 text-white py-3 rounded-md font-bold hover:bg-black transition ease-in-out duration-300"
                    >
                        {loading ? "Logging in..." : "LOGIN"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
