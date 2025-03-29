import React, { useEffect, useState } from "react";
import banner1 from "../assests/banner1.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Loader from "../components/Loader"; // ✅ Import Loader component

const Home = () => {
  const [loading, setLoading] = useState(true); // ✅ Loading state for the image

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-[calc(100%-40px)] mx-auto h-[15vh] md:h-[60vh] flex justify-center items-center overflow-hidden rounded-xl">
      {/* Show Loader until banner1 is loaded */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white">
          <Loader />
        </div>
      )}

      {/* Background Image */}
      <div className="relative w-full h-full">
        <img
          loading="lazy"
          src={banner1}
          alt="New Collection"
          className="w-full h-full md:h-full object-cover"
          onLoad={() => setLoading(false)} // ✅ Hide loader when image loads
        />

        {/* Navigation Buttons */}
        <button className="absolute top-1/2 left-[-10px] md:left-4 transform -translate-y-1/2 bg-transparent bg-opacity-30 text-slate-400 p-3 rounded-full hover:bg-opacity-50 transition">
          <FaChevronLeft className="text-xl md:text-2xl" />
        </button>
        <button className="absolute top-1/2 right-[-10px] md:right-4 transform -translate-y-1/2 bg-transparent bg-opacity-30 text-slate-400 p-3 rounded-full hover:bg-opacity-50 transition">
          <FaChevronRight className="text-xl md:text-2xl" />
        </button>

        {/* Text Content (Always on the Right Side) */}
        <div className="absolute top-1/2 right-6 md:right-12 lg:right-16 transform -translate-y-1/2 text-right text-white w-max">
          <h1 className="text-1xl md:text-4xl lg:text-5xl font-bold uppercase">
            NEW COLLECTION
          </h1>
          <p className="text-red-600 font-bold flex items-center justify-end md:text-xl lg:text-2xl mx-[-30px] md:mx-14">
            <span className="h-[2px] w-5 md:w-12 lg:w-14 bg-red-600 mx-2"></span>
            GET CODE NOW
            <span className="h-[2px] w-5 md:w-12 lg:w-14 bg-red-600 mx-2"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
