import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader"; // ✅ Import Loader component

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // ✅ Stop loading after fetching data
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-8">
      {loading ? ( // ✅ Show Loader while loading
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((item) => (
            <Link
              key={item.id}
              to={`/buy/${encodeURIComponent(item.title)}`}
              className="block"
            >
              <div
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center
                hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-lg cursor-pointer"
              >
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain rounded-md scale-105"
                />

                <h3 className="text-lg font-semibold mt-4">{item.title}</h3>

                <div className="mt-2 text-black text-base font-medium">
                  <span className="text-gray-500 line-through">
                    ₹{item.oldPrice}
                  </span>
                  &nbsp;|&nbsp;
                  <span className="text-green-600">₹{item.newPrice}</span>
                </div>

                <span className="text-base text-green-500 font-semibold mt-1">
                  ({item.discount} Off)
                </span>

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

export default Shop;
