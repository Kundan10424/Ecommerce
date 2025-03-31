import axios from "axios";

const API_URL = "https://ecommerce-production-aa96.up.railway.app/api"; // Base API URL

// Register User
// // Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData, {
      withCredentials: true,  // ✅ Ensure cookies are sent
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.msg || "Registration failed";
  }
};

// Login User & Fetch Cart
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData, {
      withCredentials: true,  // ✅ Ensures session-based authentication
    });

    const { user } = response.data;

    // Fetch the user's cart (no need for a token now)
    const cart = await getCart();

    return { user, cart };
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

// Add item to cart
export const addToCart = async (productId, quantity = 1) => {
  try {
    const response = await axios.post(
      `${API_URL}/cart/add`,
      { productId, quantity },
      { withCredentials: true } // ✅ Send cookies
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to add item to cart";
  }
};

// Get user's cart
export const getCart = async () => {
  try {
    const response = await axios.get(`${API_URL}/cart`, {
      withCredentials: true, // ✅ Ensures authentication via cookies
    });
    return response.data.cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return { items: [] }; // Return empty cart if an error occurs
  }
};

// Remove item from cart
export const removeFromCart = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/cart/remove/${productId}`, {
      withCredentials: true, // ✅ Send cookies instead of token
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to remove item from cart";
  }
};
