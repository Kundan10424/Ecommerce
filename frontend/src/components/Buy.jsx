import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "https://ecommerce-production-aa96.up.railway.app/api"

const Buy = () => {
    const { title } = useParams();
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`${API_URL}/products/title/${encodeURIComponent(title)}`);
            setProduct(response.data);
        } catch (err) {
            setError(err.response?.data?.message || "Error fetching product");
        } finally {
            setLoading(false);
        }
    };

    const handleIncrement = () => setCount(prevCount => prevCount + 1);
    const handleDecrement = () => {
        if (count > 1) setCount(prevCount => prevCount - 1);
    };

    const handleAddToCart = async () => {
        if (!product) {
            console.error("❌ Product not found!");
            return;
        }

        try {
            await axios.post(
                `${API_URL}/cart/add`,
                
                {
                    productId: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.newPrice,
                    quantity: count,
                },
                {
                    withCredentials: true, // ✅ Ensures cookies are sent with the request
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success("✅ Product added to cart!", { autoClose: 2000 });
        } catch (error) {
            console.error("❌ Error adding to cart:", error.response?.data || error.message);
            toast.error("❌ Failed to add product to cart!");
        }
    };

    if (loading) return <div className="text-center text-xl mt-10">Loading product...</div>;
    if (error) return <div className="text-center text-xl mt-10 text-red-500">{error}</div>;
    if (!product) return <div className="text-center text-xl mt-10">Product not found</div>;

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
            <ToastContainer position="top-center" autoClose={1000} hideProgressBar theme="colored" />
            
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={product.image} alt={product.title} className="w-[500px] h-[500px] object-contain rounded-lg shadow-lg border" />
            </div>

            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-semibold">{product.title}</h2>
                <div className="text-2xl font-bold">
                    <span className="line-through text-gray-700 mr-2">₹ {`${product.oldPrice} /-`}</span><br />
                    <span className="text-green-600 font-semibold">₹ {`${product.newPrice} /-`}</span> &nbsp; &nbsp;
                    <span className="text-lg text-gray-600"> ({product.discount} Off)</span>
                </div>
                <p className="text-gray-700">{product.longDescription}</p>

                <div className="flex items-center gap-3">
                    <span className="font-medium">Quantity:</span>
                    <div className="flex items-center border rounded-md px-3 py-1">
                        <button onClick={handleDecrement} className="px-2 text-lg">-</button>
                        <span className="px-3">{count}</span>
                        <button onClick={handleIncrement} className="px-2 text-lg">+</button>
                    </div>
                </div>

                <button onClick={handleAddToCart} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                    + ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default Buy;
