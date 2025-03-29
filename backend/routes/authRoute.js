import express from "express";
import { register, login, getAuthenticatedUser, logout } from "../controller/authController.js";
import verifyToken from "../middleware/authMiddleware.js"; // Middleware to protect routes

const router = express.Router();

/**
 * @desc Register a new user
 * @route POST /api/auth/register
 */
router.post("/register", register);

/**
 * @desc Login user & set token in HTTP-only cookie
 * @route POST /api/auth/login
 */
router.post("/login", login);

/**
 * @desc Get authenticated user details (Protected)
 * @route GET /api/auth/me
 * @access Private (Requires Token)
 */
router.get("/me", verifyToken, getAuthenticatedUser);

/**
 * @desc Logout user & clear token cookie
 * @route POST /api/auth/logout
 */
router.post("/logout", logout);

export default router;
