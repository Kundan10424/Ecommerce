import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { stateCities } from "../constants/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const API_URL = "https://ecommerce-production-aa96.up.railway.app/api";

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState("₹ 50");

  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    state: "",
    city: "",
    street: "",
    landmark: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${API_URL}/cart`, { withCredentials: true });
      const cartItems = response.data.cart?.items || [];
      setCart(cartItems);
      calculateTotals(cartItems);
    } catch (error) {
      console.error("❌ Error fetching cart:", error.response?.data || error.message);
    }
  };

  const calculateTotals = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = total * 0.25;
    const final = total - discountAmount;
    const shipping = final > 2000 ? "Free" : "₹ 50";

    setTotalAmount(total);
    setDiscount(discountAmount);
    setFinalTotal(final);
    setShippingFee(shipping);
  };

  const handleStateChange = (e) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setCities(stateCities[selected] || []);
    setFormData({ ...formData, state: selected });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "zipCode" && !/^\d{0,6}$/.test(value)) return;
    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.street.trim()) newErrors.street = "Street Address is required";
    if (!formData.landmark.trim()) newErrors.landmark = "Landmark is required";
    if (!formData.zipCode) newErrors.zipCode = "ZIP Code is required";
    else if (formData.zipCode.length !== 6) newErrors.zipCode = "ZIP Code must be 6 digits";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (formData.phone.length !== 10) newErrors.phone = "Phone must be 10 digits";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      navigate("/order");
    } else {
      setShowPopup(true);
      toast.warning("Please fill the required details", { position: "top-center" }),
        setTimeout(() => setShowPopup(false), 2000);
    }
  };

  return (
    <div className="container flex flex-col md:flex-row gap-10 p-6 md:p-14 w-full">
      {/* Left Section - Billing Details */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-black mb-6">Billing Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Full Name*</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="p-2 bg-gray-100 rounded-lg" />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Country*</label>
            <select name="country" value={formData.country} onChange={handleInputChange} className="p-2 bg-gray-100 rounded-lg">
              <option value="">---Select---</option>
              <option value="India">India</option>
            </select>
          </div>

          {/* Street Address */}
          <div className="flex flex-col col-span-2">
            <label className="mb-1 font-medium">Street Address*</label>
            <input type="text" name="street" value={formData.street} onChange={handleInputChange} className="p-2 bg-gray-100 rounded-lg" />
          </div>

          {/* State & City */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">State*</label>
            <select name="state" value={formData.state} onChange={handleStateChange} className="p-2 bg-gray-100 rounded-lg">
              <option value="">---Select---</option>
              {Object.keys(stateCities).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">City*</label>
            <select name="city" value={formData.city} onChange={handleInputChange} className="p-2 bg-gray-100 rounded-lg">
              <option value="">---Select---</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-1/2 p-2">
        <div className="p-6 border border-gray-200 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Total</h2>
          <div className="flex justify-between"><span>Total</span><span>₹ {totalAmount.toFixed(2)}</span></div>
          <div className="flex justify-between text-green-600"><span>Discount</span><span>₹ {discount.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Shipping Fee</span><span>{shippingFee}</span></div>
          <div className="flex justify-between font-bold border-t mt-2"><span>Sub Total</span><span>₹ {finalTotal.toFixed(2)}</span></div>
          <button className="mt-5 w-full bg-red-600 text-white p-3 rounded-md" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
