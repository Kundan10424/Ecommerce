import axios from "axios";

const API_URL = "https://ecommerce-production-aa96.up.railway.app/api"; // Base API URL

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.msg || "Registration failed";
  }
};

// Login User & Fetch Cart
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    const { user, token } = response.data;

    // Fetch the user's cart after login
    const cart = await getCart(token);

    return { user, token, cart };
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

// Add item to cart
export const addToCart = async (token, productId, quantity = 1) => {
  try {
    const response = await axios.post(
      `${API_URL}/cart/add`,
      { productId, quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to add item to cart";
  }
};

// Get user's cart
export const getCart = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return { items: [] }; // Return empty cart if an error occurs
  }
};

// Remove item from cart
export const removeFromCart = async (token, productId) => {
  try {
    const response = await axios.delete(`${API_URL}/cart/remove/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to remove item from cart";
  }
};
