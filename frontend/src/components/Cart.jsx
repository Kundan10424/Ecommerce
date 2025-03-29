import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart", {
        withCredentials: true, // ✅ Include cookies
      });

      setCart(response.data.cart?.items || []);
    } catch (error) {
      console.error("❌ Error fetching cart:", error.response?.data || error.message);
    }
  };

const removeFromCart = async (productId) => {

  try {
      const response = await axios.delete(
          `http://localhost:5000/api/cart/remove?productId=${productId._id}`,
          { withCredentials: true }
      );

      if (response.data.success) {
          fetchCart();
          toast.error("Product removed from cart!", { position: "top-center" });
      } else {
          console.error("❌ Error removing item:", response.data.msg);
      }
  } catch (error) {
      console.error("❌ Error removing item:", error.response?.data || error.message);
  }
};


  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = totalAmount * 0.25; // Example discount
  const finalTotal = totalAmount - discount;
  const shippingFee = finalTotal > 2000 ? "Free" : "₹ 50";

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar theme="colored" />

      <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Shopping Cart</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty 🛒</p>
          ) : (
            <>
              <div className="hidden md:grid grid-cols-5 font-semibold border-b pb-2 mb-4 text-gray-700">
                <span className="text-left">Product</span>
                <span className="text-center">Price</span>
                <span className="text-center">Quantity</span>
                <span className="text-center">Subtotal</span>
                <span className="text-center">Remove</span>
              </div>

              {cart.map((item) => (
                <div key={item.productId.toString()} className="grid grid-cols-5 items-center border-b py-2 gap-5">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded-md bg-gray-100" />
                    <span className="font-medium">{item.title}</span>
                  </div>

                  <div className="text-center text-gray-700">₹ {item.price}</div>
                  <div className="text-center text-gray-700">Qty. {item.quantity}</div>
                  <div className="text-center text-gray-700">₹ {item.price * item.quantity}</div>

                  <button className="text-red-500 hover:text-red-700 text-center mx-12" onClick={() => removeFromCart(item.productId)}>
                    <FaTimes />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Total Section */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md shadow-md md:my-[-20px]">
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Total</h3>

          <div className="flex justify-between mb-2">
            <span>Total</span>
            <span className="text-gray-700">₹ {totalAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-green-600 font-semibold">Discount (You saved)</span>
            <span className="text-green-600">₹ {discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping Fee</span>
            <span className={shippingFee === "Free" ? "text-green-600" : "text-gray-700"}>{shippingFee}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-2 border-t pt-2">
            <span>Sub Total</span>
            <span className="text-blue-600">₹ {finalTotal.toFixed(2)}</span>
          </div>
          <Link
              to={cart.length === 0 ? "#" : "/checkout"} // Prevent navigation if cart is empty
              onClick={(e) => {
                if (cart.length === 0) {
                  e.preventDefault(); // Stop navigation
                  toast.warning("Your cart is empty! 🛒", { position: "top-center" });
                }
              }}
              className={`block text-center mt-4 py-2 px-4 rounded-md ${
                cart.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
            >
              CHECKOUT
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Cart;


