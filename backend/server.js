import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"; // ✅ Added for cookies
import process from "process"; 
import authRoutes from "./routes/authRoute.js";
import cartRoutes from "./routes/cartRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

// ✅ Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL|| "https://ecommere-git-main-kundans-projects-5efe66a6.vercel.app/", // ✅ Allow frontend URL
    credentials: true, // ✅ Allow cookies
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // ✅ Parse cookies

// ✅ Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};
connectDB();

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products", productRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Welcome to the authentication backend with cookies!");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
