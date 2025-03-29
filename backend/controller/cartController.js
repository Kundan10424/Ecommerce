import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import mongoose from "mongoose";

// ✅ Add Item to Cart
export const addToCart = async (req, res) => {
    const userId = req.user?.userId; // Extract userId from middleware

    if (!userId) {
        return res.status(401).json({ msg: "Unauthorized! Please log in." });
    }

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        const { productId, title, image, price, quantity } = req.body;

        // ✅ Check if product already exists in cart
        const existingItem = cart.items.find((item) => item.productId.toString() === productId);

        if (existingItem) {
            existingItem.quantity += quantity || 1;
        } else {
            cart.items.push({ productId, title, image, price, quantity: quantity || 1 });
        }

        await cart.save();
        console.log("✅ Updated Cart:", cart);

        res.status(200).json({ msg: "Product added to cart!", cart });

    } catch (error) {
        console.error("❌ Error adding to cart:", error);
        res.status(500).json({ msg: "Server error!", error: error.message });
    }
};

// ✅ Get User's Cart
export const getCart = async (req, res) => {
    try {
        const userId = req.user?.userId; // Extract userId from middleware
        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized! Please log in." });
        }

        const cart = await Cart.findOne({ userId }).populate("items.productId");

        if (!cart || cart.items.length === 0) {
            return res.status(200).json({ msg: "🛒 Cart is empty", cart: { userId, items: [] } });
        }

        res.status(200).json({ cart });
    } catch (error) {
        console.error("❌ Error retrieving cart:", error);
        res.status(500).json({ msg: "❌ Server error!", error: error.message });
    }
};

// ✅ Remove Item from Cart

export const removeFromCart = async (req, res) => {
    try {
        const userId = req.user?.userId;
        const { productId } = req.query; // ✅ Extract productId from query params

        if (!userId) {
            return res.status(401).json({ msg: "Unauthorized! Please log in." });
        }

        if (!productId) {
            return res.status(400).json({ success: false, msg: "Product ID is required!" });
        }

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ success: false, msg: "Invalid product ID format!" });
        }

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ success: false, msg: "Cart not found!" });
        }

        // Remove item from cart
        const updatedItems = cart.items.filter(item => item.productId.toString() !== productId);

        if (updatedItems.length === cart.items.length) {
            return res.status(404).json({ success: false, msg: "Product not found in cart!" });
        }

        cart.items = updatedItems;
        await cart.save();

        console.log("🗑️ Item removed:", productId);
        res.status(200).json({ success: true, msg: "Item removed successfully!", cart });
    } catch (error) {
        console.error("❌ Error in removeFromCart:", error);
        res.status(500).json({ success: false, msg: "Server error!", error: error.message });
    }
};


;
