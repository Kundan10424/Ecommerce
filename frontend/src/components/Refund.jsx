import React, { useEffect } from "react";

const Refund = () => {

useEffect(() => {
    window.scrollTo(0, 0)
}, [] )

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-4">
      <h1 className="text-3xl md:text-4xl font-bold italic">Refund and Return Policy</h1>

      <h2 className="text-2xl font-bold mb-2 mt-2"><span>Introduction</span></h2>
      <p className="text-gray-700 mb-6">
        At <span className="font-semibold">ROHITZ FITTINGS (OPC) PRIVATE LIMITED</span>,  
        we take customer satisfaction very seriously. We understand that there may be times when a product purchased from us may not meet your expectation
        or there may be issues with the product quality. In such cases, we ffer a clear and transparent refund and return policy to ensure that you are completely 
        satisfied with your purchases.
      </p>

      <h2 className="text-2xl font-bold mb-2">General Terms and Conditions</h2>

      <p className="text-gray-700">We strive to provide the best service and quality products to our customer, However, in case you are not satisfied with the
        prduct, please read the following guidelines for refunds and returns:</p>
      <ul className="list-none list-inside text-gray-700 mt-2 mb-6">
        <li>Refunds and returns are only applicable for products purchased 
          directely from ROHITZ FITTINGS (OPC) PRIVATE LIMITED.</li>
        <li>Refunds or exchange will only be accepted if the product is in unused, undamaged condition, and in the original packaging.</li>
        <li>We do not accept returns or refunds for products that have been used, damaged, or altered in any way.</li>
        <li>All requests for returns or refunds must be made within 7 days from the date of purchase or delivery.</li>
        <li>Products must be returned within 15 days from the date of the return request to be eligible for a refund or exchange.</li>
      </ul>

    
      <h2 className="text-2xl font-bold mb-2">Refund Process</h2>

      <p className="text-gray-700">If you have received a product that is damaged, defective, or not as described, please follow the steps below to initiate a refund:</p>
      <ul className="list-none list-inside text-gray-700 mt-2 mb-6">
        <li>Contact us via email at rohitpvtltd001@gmail.com or call us at +91-9582133503 within 7 days of receiving the product.</li>
        <li>Provide your order details including the order number, a description of the issue, and photographs of the damaged or defective product, if applicable.</li>
        <li>We will review your request and determine whether you are eligible for a refund. If your request is approved, we will initiate the refund process within 7 business days.</li>
        <li>The refund will be processed through the same payment method used for the original purchase.</li>
        <li>Refunds may take up to 10 business days to reflect in your account depending on your payment method and the bank's processing time.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Return Process</h2>

      <p className="text-gray-700">If you are not completely satisfied with the product for any reason, you can return the product following these steps:</p>
      <ul className="list-none list-inside text-gray-700 mt-2 mb-6">
        <li>Contact our customer service team at rohitpvtltd001@gmail.com or call us at +91-9582133503 to initiate the return request within 7 days of receiving the product.</li>
        <li>Provide the order number, product details, and reason for return in your email or phone call.</li>
        <li>We will send you a return authorization and instructions for returning the product to us.</li>
        <li>Return shipping fees will be the responsibility of the customer, unless the return is due to a defect or error on our part.</li>
        <li>Once we receive the returned product and verify its condition, we will process your return within 7 business days.</li>
        <li>If you are eligible for an exchange, the replacement product will be shipped to you free of charge.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Non-Refundable/Non-Returnable Items</h2>

      <p className="text-gray-700">There are certain items that are not eligible for a return or refund. These include, but are not limited to:</p>
      <ul className="list-none list-inside text-gray-700 mt-2 mb-6">
        <li>Products that have been used, altered, or damaged by the customer.</li>
        <li>Items purchased during promotional offers, discounts, or clearance sales (unless defective).</li>
        <li>Products with missing parts or accessories.</li>
       </ul>

      <h2 className="text-2xl font-bold mb-2">Damaged or Defective Products</h2>

      <p className="text-gray-700">In case you receive a damaged or defective product, we apologize for the inconvenience. Please follow these steps for a smooth resolution:</p>
      <ul className="list-none list-inside text-gray-700 mt-2 mb-6">
        <li>Contact us within 7 days of receiving the product to report the issue.</li>
        <li>Provide clear photos or videos of the damaged or defective item.</li>
        <li>If the product is defective or damaged during shipping, we will cover the return shipping costs and offer you a full refund or replacement.</li>
        <li>If the product is damaged by the customer, it will not be eligible for a return or refund.</li>
      </ul>


      <h2 className="text-2xl font-bold mb-2">Exchange Policy</h2>

      <p className="text-gray-700">If you wish to exchange a product for a different size, color, or style, you can do so within 7 days of receiving the product. The following conditions apply:</p>
      <ul className="list-none list-inside text-gray-700 mt-2 mb-6">
        <li>The product must be in unused, undamaged condition with all original packaging.</li>
        <li>The exchange request should be made within 7 days of receiving the product.</li>
        <li>The customer is responsible for return shipping costs, unless the exchange is due to a mistake made by ROHITZ FITTINGS (OPC) PRIVATE LIMITED.</li>
        <li>Once we receive the returned product and verify its condition, we will send the exchanged item to you within 7 business days.</li>
      </ul>
        
    <h2 className="text-2xl font-bold mb-2 mt-2">Contact Us</h2>

    <p className="text-gray-700">If you have any questions or concerns regarding our refund and return policy, or if you need assistance with a return or refund request, please do not hesitate to contact us:</p>
    <ul className="list-none list-inside text-gray-700 mt-2 mb-6">
    <li>Email: rohitpvtltd001@gmail.com</li>
    <li>Phone: +91-9582133503</li>
    </ul>

    <h2 className="text-2xl font-bold mb-2 mt-2">Conclusion</h2>
    <p className="text-gray-700">We aim to ensure your shopping experience with ROHITZ FITTINGS (OPC) PRIVATE LIMITED is seamless and enjoyable. If you are unsatisfied with your purchase, please follow the guidelines outlined in this policy to request a refund or return. Our customer service team is always available to help and resolve any issues you may have. Thank you for choosing us!</p>
        
    </div>
  );
};

export default Refund;
