import React, { useEffect } from "react";

const Terms = () => {

useEffect(() => {
    window.scrollTo(0, 0)
}, [] )

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-4">
        <h1 className="text-3xl md:text-4xl font-bold italic">Terms and Conditions</h1>

        <p className="text-gray-700 mb-6 mt-2">
            Welcome to <span className="font-semibold">ROHITZ FITTINGS (OPC) PRIVATE LIMITED</span>. 
            By accessing or using our website, you agree to comply with and be bound by the following terms and condition. Please read them carefully.
        </p>

        <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>

        <p className="text-gray-700">These Terms and Conditions govern your use of our website and services. By using our website, you accept these terms in full</p>
        
        <h2 className="text-2xl font-bold mb-2">2. Eligibility</h2>

        <p className="text-gray-700">You must be atleast 18 years old to use our services. By using this website, you confirm that you meet this requirement.</p>

        <h2 className="text-2xl font-bold mb-2">3. Products and Services</h2>

        <p className="text-gray-700">We offer various fittings and related products. The availability, pricing, and specifications of products may change without prior notice.</p>

        <h2 className="text-2xl font-bold mb-2">4. Orders and Payments</h2>

        <p className="text-gray-700">All orders are subject to availability. We reserve the right to refuse or cancel any order at ur discretion. Payments must be made using the methods specified on our website.</p>

        <h2 className="text-2xl font-bold mb-2">5. Shipping and Delivery</h2>

        <p className="text-gray-700">We strive to ensure timely delivery of all orders. However, delays may occur due to unforseen circumstances. We are not responsible for such delays.</p>

        <h2 className="text-2xl font-bold mb-2">6. Returns and Refunds</h2>

        <p className="text-gray-700">If you are not satisfied with your purchase, you may return the product within 7 days of receipt, subject to our return policy.</p>

        <h2 className="text-2xl font-bold mb-2">7. Intellectual Property</h2>

        <p className="text-gray-700">All content on this website, including text, graphics, logos, and images, is the property of ROHITZ FITTINGS and may not be reproduced without permission.</p>

        <h2 className="text-2xl font-bold mb-2">8. Limitation of Liability</h2>

        <p className="text-gray-700">We are not liable for any direct, indirect, or incidential damages resulting from your use of our website or prducts.</p>

        <h2 className="text-2xl font-bold mb-2">9. Privacy Policy</h2>

        <p className="text-gray-700">Your use of our website is also governed by our Privacy Policy, which outlines how we collect and use yur personal data.</p>

        <h2 className="text-2xl font-bold mb-2">10. Amendments</h2>

        <p className="text-gray-700">We reserve the right to modify these terms at any time. Any chnages will be posted on this page.</p>

        <h2 className="text-2xl font-bold mb-2 mt-2">11. Contact Us</h2>

        <p className="text-gray-700">if you have any questions, contact us at:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 mb-6">
            <li>Company Name: ROHITZ FITTINGS (OPC) PRIVATE LIMITED</li>
            <li>Email: rohitpvtltd001@gmail.com</li>
            <li>Phone: +91-9582133503</li>
        </ul>
        
    </div>
  );
};

export default Terms;
