import React, { useEffect } from "react";

const Shipping = () => {

useEffect(() => {
    window.scrollTo(0, 0)
}, [] )

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-4">
      <h1 className="text-3xl md:text-4xl font-bold italic">Shipping Policy</h1>
      <p className="text-gray-700 mt-2">Thank you for shopping with ROHITZ FITTINGS (OPC) PRIVATE LIMITED. We want to ensure that your experience is as smooth and satisfactory as possible. Our shipping policy outlines the process, estimated delivery time, and costs involved in the delivery of products ordered from our website. Please read the following information carefully to understand how we handle shipping.</p>

      <h2 className="text-2xl font-bold mb-2 mt-4">1. Order Processing</h2>
      <p className="text-gray-700">Once you place an order on our website, our team processes it as quickly as possible. Orders are processed during business hours (Monday to Friday, 10:00 AM to 6:00 PM). Orders placed after business hours or during weekends and public holidays will be processed on the next business day.</p>
      <p className="text-gray-700 mt-4">After the order is processed, you will receive a confirmation email with the order details, including the expected delivery date. If there is any delay in processing, we will notify you immediately.</p>
    
    <h2 className="text-2xl font-bold mt-2">2. Shipping Methods and Delivery Times</h2>

    <p className="text-gray-700">We offer a variety of shipping methods to ensure that you receive your order in the most efficient and timely manner. Shipping methods available include:</p>
    <ul className="list-none list-inside text-gray-700 mt-2 mb-6">
    <li>Standard Shipping: Estimated delivery time is 5-7 business days.</li>
    <li>Expedited Shipping: Estimated delivery time is 2-4 business days.</li>
    <li>Same-Day Shipping: Available in select regions for orders placed before 12:00 PM.</li>
    <li>Delivery will be made by the end of the day.</li>
    <li>Please note that the delivery times mentioned above are estimates and may vary depending on the shipping carrier, location, and other factors beyond our control.</li>
    </ul>

     <h2 className="text-2xl font-bold mb-2 mt-4">3. Shipping Fees</h2>
      <p className="text-gray-700">Shipping fees are calculated based on the shipping method selected, the delivery address, and the weight/size of the products. The shipping fees will be displayed during the checkout process before you complete your purchase.</p>
      <p className="text-gray-700 mt-4">We offer free standard shipping on all orders above a specified amount. The free shipping threshold will be displayed on the checkout page. If you choose expedited or same-day shipping, additional charges will apply.</p>
      <p className="text-gray-700 mt-4">International shipping fees are determined by the destination country. Please note that customs duties and taxes may apply to international shipments, and these are the responsibility of the customer.</p>

      <h2 className="text-2xl font-bold mb-2 mt-4">4. Shipping Restriction</h2>
      <p className="text-gray-700">We currently ship within India and to select international destinations. We do not ship to PO Boxes, APO/FPO addresses, or restricted areas. If your address is located in one of these areas, we may contact you to arrange an alternative shipping method or cancel the order.</p>

      <h2 className="text-2xl font-bold mb-2 mt-4">5. Tracking Your Order</h2>
      <p className="text-gray-700">Once your order has been dispatched, we will send you an email with tracking information. You can use this information to track your order through the carrier’s website. In case you do not receive your tracking number or if you encounter any issues with tracking, feel free to reach out to our customer service team.</p>
      
      <h2 className="text-2xl font-bold mb-2 mt-4">6. Order Delays</h2>
      <p className="text-gray-700">While we make every effort to deliver your products on time, there may be circumstances beyond our control that cause delays, such as weather conditions, strikes, or issues with the shipping carrier. In case of significant delays, we will notify you via email or phone and provide you with updated delivery estimates.</p>

      <h2 className="text-2xl font-bold mb-2 mt-4">7. Returns and Exchanges</h2>
      <p className="text-gray-700">We want you to be completely satisfied with your purchase. If, for any reason, you are not happy with your order, we offer a return and exchange policy. To return an item, it must be in its original condition and packaging. Return requests must be made within 15 days from the date of delivery.</p>
      <p className="text-gray-700 mt-4">For more details, please refer to our Return & Exchange Policy on our website.</p>

      <h2 className="text-2xl font-bold mb-2 mt-4">8. Damaged or Defective Items</h2>
      <p className="text-gray-700">If you receive a damaged or defective item, please contact our customer support team immediately at rohitpvtltd001@gmail.com or call us at +91-9582133503. We will work with you to resolve the issue, whether it’s through a replacement, repair, or refund. Please provide us with your order number and photos of the damaged item to assist with the claims process.</p>

      <h2 className="text-2xl font-bold mb-2 mt-4">9. International Shipping</h2>
      <p className="text-gray-700">For international orders, please note that customs duties, taxes, and other import charges may apply depending on the destination country. These charges are the responsibility of the customer and will be due upon delivery. We recommend contacting your local customs office for more details before placing an order.</p>
      <p className="text-gray-700 mt-4">International orders may also take longer to arrive due to customs processing. Please allow additional time for delivery when ordering from outside India.</p>

      <h2 className="text-2xl font-bold mb-2 mt-4">10. Customer Service</h2>
      <p className="text-gray-700">If you have any questions or concerns about our shipping policy or need assistance with an order, please feel free to contact our customer service team. You can reach us via email at rohitpvtltd001@gmail.com or by phone at +91-9582133503.</p>
      <p className="text-gray-700 mt-4">Our team is here to assist you with any shipping-related inquiries, from tracking your order to helping you with returns and exchanges.</p>

      <h2 className="text-2xl font-bold mb-2 mt-4">Conclusion</h2>
      <p className="text-gray-700">At ROHITZ FITTINGS (OPC) PRIVATE LIMITED, we are committed to providing our customers with the best shopping experience. We aim to ensure timely and secure delivery of your products and to address any issues you may have. If you need more information about our shipping policy, don’t hesitate to contact us.</p>
        
    </div>
  );
};

export default Shipping;
