import express from "express";
import { addToCart, getCart, removeFromCart } from "../controller/cartController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", verifyToken, addToCart);  // ✅ This should exist
router.get("/", verifyToken, getCart);
router.delete("/remove", verifyToken, removeFromCart);

export default router;
