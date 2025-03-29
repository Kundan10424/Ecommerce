import React from "react";
import amazon from "../assests/payment/amazon.png"
import apple from "../assests/payment/apple.png"
import google from "../assests/payment/google.png"

import paypal from "../assests/payment/paypal.png"
import square from "../assests/payment/square.png"
import stripe from "../assests/payment/stripe.png"
import {Link} from 'react-router-dom'                       

const Footer = () => {
  return (
    <footer className="bg-[#141815] text-white p-2 md:p-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold italic mb-3">Latest Product</h3>
          <ul className="text-gray-400 font-semibold italic">
            <li><Link to = '/loading' className=" hover:text-amber-500">Mens Summits Brisbane Sneakers</Link></li>
            <li><Link to = '/loading' className=" hover:text-amber-500">Mens MEXICO-11 Casual Sneaker Shoes with Synthetic</Link></li>
            <li><Link to = '/loading' className=" hover:text-amber-500">Mens Dazzler Sneaker</Link></li>
            <li><Link to = '/loading' className=" hover:text-amber-500">Men Draft Running Shoe</Link></li>
            <li><Link to = '/loading' className=" hover:text-amber-500">Men NITROEDGE-01 Running and Gym wear Running Shoe</Link></li>
          </ul>
        </div>                                                    
        <div>
          <h3 className="text-xl md:text-2xl font-semibold italic mb-3">New Product</h3>
          <ul className="text-gray-400 font-semibold italic">
            <li><Link to = '/loading' className=" hover:text-amber-500">Mens Wonder-13 Sports Running Shoes</Link></li>
            <li><Link to = '/loading' className=" hover:text-amber-500">Men Sport Shoes | Running Shoes | Casual Walking Shoes</Link></li>
            <li><Link to = '/loading' className=" hover:text-amber-500">Mens Oxyfit (N) Walking Shoes</Link></li>
            <li><Link to = '/loading' className=" hover:text-amber-500">Mens Dazzler Sneaker</Link></li>
            <li><Link to = '/loading' className=" hover:text-amber-500">Mens MEXICO-11 Casual Sneaker Shoes with Synthetic</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold italic mb-3">Terms & Policies</h3>
          <ul className="text-gray-400 font-semibold italic">
            <li><Link to = '/privacypolicies' className=" hover:text-amber-500">Privacy Policy</Link></li>
            <li><Link to = '/terms&condition' className ="hover:text-amber-500">Terms & Conditions</Link></li>
            <li><Link to = '/refundpolicy' className ="hover:text-amber-500">Refund & Cancellation</Link></li>
            <li><Link to = '/shippingpolicy' className="hover:text-amber-500">Shipping Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold italic mb-3">Browse Website</h3>
          <ul className="text-gray-400 font-semibold italic">
            <li><Link to = '/' className=" hover:text-amber-500">Home</Link></li>
            <li><Link to = '/about' className=" hover:text-amber-500">About Us</Link></li>
            <li><Link to = '/shopwithus' className=" hover:text-amber-500">Shop With Us</Link></li>
            <li><Link to = '/contact' className=" hover:text-amber-500">Contact Us</Link></li>
            <li className=" hover:text-amber-500 cursor-pointer">Sitemap</li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 pt-4">
        <p className="text-base text-gray-500 md:self-start md:mr-auto order-1 italic font-semibold">
          &copy; 2024 ROHITZ FITTINGS (OPC) PRIVATE LIMITED
        </p>
        <div className="flex gap-6 mt-4 md:mt-0 md:ml-auto md:order-2 flex-wrap justify-center md:justify-end">
          <img src={paypal} alt="Paypal" className="w-10 h-6 bg-white rounded-sm border-none object-cover" />
          <img src={apple} alt="Apple Pay" className="w-10 h-6 bg-white rounded-sm border-none object-cover" />
          <img src={google} alt="Google Pay" className="w-10 h-6 bg-white rounded-sm border-none object-cover" />
          <img src={stripe} alt="Stripe" className="w-10 h-6 bg-white rounded-sm border-none object-contain" />
          <img src={square} alt="Square" className="w-10 h-6 bg-white rounded-sm border-none object-contain" />
          <img src={amazon} alt="Amazon" className="w-10 h-6 bg-white rounded-sm border-none object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
