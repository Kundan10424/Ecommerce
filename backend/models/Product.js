import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true }, // ✅ Ensures every product has a title
    image: { type: String, required: true }, // ✅ Image is required
    oldPrice: { type: Number, default: 0 }, // ✅ Default set to 0 if missing
    newPrice: { type: Number, required: true }, // ✅ Essential field
    description: { type: String, default: "" }, // ✅ Default empty string
    longDescription: { type: String, default: "" }, // ✅ Default empty string
    discount: { type: String, default: "0%" } // ✅ Default to 0% if not provided
}, { timestamps: true }); // ✅ Auto-adds createdAt and updatedAt fields

const Product = mongoose.model("Product", productSchema);
export default Product;
