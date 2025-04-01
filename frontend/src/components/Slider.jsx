import React,{useEffect, useState} from "react";
import axios from "axios"
// import { collectionData } from "../constants"; // Data file
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay } from "swiper/modules"; // Import Swiper modules
import { Link } from "react-router-dom"; // Import Link for navigation
import "swiper/css"; // Swiper styles
import "swiper/css/autoplay"; // Autoplay styles

const CollectionSlider = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://ecommerce-production-0dc2.up.railway.app/api/products"); 
                setProducts(response.data); // Assuming API returns an array of products
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="collection-slider w-full px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-medium text-center mb-8">
                Shop With Us
            </h2>

            <Swiper
                spaceBetween={20} // Space between slides
                slidesPerView={1} // Default: 1 slide per view (mobile)
                breakpoints={{
                    768: { slidesPerView: 3 }, // Show 3 slides in desktop view
                }}
                loop={true} // Enable infinite loop
                autoplay={{ delay: 2500, disableOnInteraction: false }} // Auto-slide every 2.5 seconds
                speed={800} // Smooth transition speed
                grabCursor={true} // Enable cursor grabbing effect
                modules={[Autoplay]} // Enable autoplay
            >
                {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
                    <SwiperSlide key={index} className="flex flex-col gap-4">
                        {products
                            .slice(index * 2, index * 2 + 2) // Ensure each slide contains 2 items stacked vertically
                            .map((item) => (
                                <Link 
                                    key={item.id} 
                                    to={`/buy/${encodeURIComponent(item.title)}`} 
                                    className="block w-[90%] mx-auto md:w-full"
                                >
                                    <div 
                                        className="p-4 flex flex-col items-center text-center 
                                        hover:scale-105 transition duration-300 ease-in-out transform cursor-pointer"
                                    >
                                        {/* Image */}
                                        <img 
                                            loading = "lazy"
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-40 object-contain rounded-md scale-105"
                                        />

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold mt-4">{item.title}</h3>

                                        {/* Price Details */}
                                        <div className="mt-2 text-black text-base font-medium">
                                            <span className="text-gray-500 line-through">
                                                ₹{item.oldPrice}
                                            </span> 
                                            &nbsp;|&nbsp;
                                            <span className="text-black">
                                                ₹{item.newPrice}
                                            </span>
                                        </div>

                                        {/* Discount - Next Line */}
                                        <span className="text-base text-green-500 font-semibold mt-1">
                                            ({item.discount} Off)
                                        </span>

                                        {/* Buy Now Button */}
                                        <button className="mt-4 px-4 py-2 bg-slate-900 text-white font-medium rounded-md hover:bg-black transition">
                                            Buy Now
                                        </button>
                                    </div>
                                </Link>
                            ))}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CollectionSlider;
