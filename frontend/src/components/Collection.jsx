import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader"; // ✅ Import Loader component

const API_URL = "https://ecommerce-production-aa96.up.railway.app/api"
const Collection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_URL}/products`, {
                    withCredentials: true, // ✅ Enable cookies-based authentication
                });

                console.log("API response:" , response.data)

                setProducts(response.data || []);
            } catch (error) {
                console.error("❌ Error fetching products:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 my-5 rounded-xl w-[calc(100%-40px)] bg-[#fffdcf]">
            <h2 className="text-2xl md:text-3xl font-medium text-center mb-8">
                Our Latest Collection
            </h2>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader />
                </div>
            ) : products.length === 0 ? (
                <p className="text-center text-gray-600">No products available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.slice(0, 8).map((item) => (
                        <Link 
                            key={item._id} 
                            to={`/buy/${encodeURIComponent(item.title)}`} 
                            className="block"
                        >
                            <div 
                                className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center
                                hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-lg cursor-pointer"
                            >
                                {/* Image */}
                                <img 
                                    loading="lazy"
                                    src={item.image || "/placeholder.jpg"}  
                                    alt={item.title || "Product Image"} 
                                    className="w-full h-40 object-contain rounded-md scale-105"
                                />

                                {/* Title */}
                                <h3 className="text-lg font-semibold mt-4">{item.title || "Untitled Product"}</h3>

                                {/* Price Details */}
                                <div className="mt-2 text-black text-base font-medium">
                                    {item.oldPrice ? (
                                        <span className="text-gray-500 line-through">₹{item.oldPrice}</span>
                                    ) : null}
                                    &nbsp;|&nbsp;
                                    <span className="text-black">₹{item.newPrice || "N/A"}</span>
                                </div>

                                {/* Discount */}
                                {item.discount && (
                                    <span className="text-base text-green-500 font-semibold mt-1">
                                        ({item.discount} Off)
                                    </span>
                                )}

                                {/* Buy Now Button */}
                                <button className="mt-4 px-4 py-2 bg-slate-900 text-white font-medium rounded-md hover:bg-black transition">
                                    Buy Now
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Collection;
