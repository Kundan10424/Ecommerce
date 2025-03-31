import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import process from "process";

/**
 * @desc Register a new user
 * @route POST /api/auth/register
 */
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required!" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("🔑 Hashed Password Before Saving:", hashedPassword);

    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Ensure this is being saved
    });

    await newUser.save();
    console.log("✅ User Saved Successfully!");

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("❌ Register Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc Login user & set token in HTTP-only cookie
 * @route POST /api/auth/login
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("📩 Received Email:", email);
    console.log("🔑 Received Password:", password);

    // Find user and explicitly select the password field
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      console.log("❌ User not found!");
      return res.status(400).json({ success: false, msg: "Invalid email or password!" });
    }

    console.log("🔒 Stored Password in DB:", user.password);

    if (!password || !user.password) {
      console.log("❌ Password missing!");
      return res.status(400).json({ success: false, msg: "Invalid email or password!" });
    }

    // Compare hashed password
    console.log("🔍 Comparing passwords...");
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("❌ Password does not match!");
      return res.status(400).json({ success: false, msg: "Invalid email or password!" });
    }

    console.log("✅ Password matched! Logging in...");

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Set HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 1 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Exclude password from response
    const { password: _, ...userData } = user._doc;

    res.json({ success: true, msg: "Login successful!", user: userData });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};


/**
 * @desc Logout user & clear token cookie
 * @route POST /api/auth/logout
 */
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({ message: "Logged out successfully!" });
  } catch (error) {
    console.error("❌ Logout Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc Get authenticated user details
 * @route GET /api/auth/me
 * @access Private (requires token)
 */
export const getAuthenticatedUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Access Denied! No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("❌ Get User Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
