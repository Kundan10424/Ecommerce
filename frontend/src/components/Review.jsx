import React from "react";
import Slider from "react-slick";
import { review } from "../constants";
import { FaStar, FaRegStar, FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 768, // Mobile view settings
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <div className="text-center py-8 px-4">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Product Reviews</h2>

            {/* Desktop View (Grid Layout) */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {review.slice(0, 4).map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg p-5 text-left relative transition-transform duration-300 hover:scale-105">
                        {/* Star Ratings */}
                        <div className="flex gap-1 text-yellow-500 text-lg">
                            {[...Array(4)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                            <FaRegStar className="text-gray-300" />
                        </div>

                        {/* Review Text */}
                        <p className="italic my-3 text-gray-700">{item.text}</p>

                        {/* Customer Info */}
                        <div className="flex items-center gap-3 mt-3">
                            <img loading = "lazy" src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                            <span className="font-semibold text-gray-900">{item.name}</span>
                        </div>

                        {/* Quote Icon */}
                        <FaQuoteRight className="absolute bottom-2 right-3 text-green-600 text-2xl" />
                    </div>
                ))}
            </div>

            {/* Mobile View (Slider) */}
            <div className="md:hidden w-full">
                <Slider {...settings}>
                    {review.map((item) => (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg p-5 text-left relative transition-transform duration-300 hover:scale-105">
                            {/* Star Ratings */}
                            <div className="flex gap-1 text-yellow-500 text-lg">
                                {[...Array(4)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                                <FaRegStar className="text-gray-300" />
                            </div>

                            {/* Review Text */}
                            <p className="italic my-3 text-gray-700">{item.text}</p>

                            {/* Customer Info */}
                            <div className="flex items-center gap-3 mt-3">
                                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                                <span className="font-semibold text-gray-900">{item.name}</span>
                            </div>

                            {/* Quote Icon */}
                            <FaQuoteRight className="absolute bottom-2 right-3 text-green-600 text-2xl" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Review;
