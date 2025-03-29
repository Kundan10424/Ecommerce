import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }, // ✅ Prevents spaces before/after name
    email: { type: String, required: true, unique: true, lowercase: true, trim: true }, // ✅ Case-insensitive email
    password: { type: String, required: true, select: false } // ✅ Password won't be returned in queries by default
  },
  { timestamps: true } // ✅ Auto-adds createdAt & updatedAt fields
);

const User = mongoose.model("User", userSchema); // ✅ Capitalized model name

export default User;
