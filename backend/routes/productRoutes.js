import express from "express";
import Product from "../models/Product.js";
import mongoose from "mongoose";

const router = express.Router();

/*  
  ✅ Add multiple products (Bulk insert)
  - Used for initial setup or batch adding products.  
*/
router.post("/add", async (req, res) => {
    try {
        const products = req.body;  // Expecting an array of products
        const result = await Product.insertMany(products);
        res.status(201).json({ message: "Products added successfully!", data: result });
    } catch (error) {
        res.status(500).json({ message: "Error adding products", error: error.message });
    }
});

/*  
  ✅ Get all products 
  - Fetch all products from the database.
*/
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

/*  
  ✅ Get a product by title (Before ID route to prevent conflicts)
  - Used for searching by title (e.g., Buy.jsx)  
*/
router.get("/title/:title", async (req, res) => {
    try {
        const decodedTitle = decodeURIComponent(req.params.title); // Ensure proper decoding
        const product = await Product.findOne({ title: decodedTitle });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error: error.message });
    }
});

/*  
  ✅ Get a product by MongoDB ID
  - Fetch a single product by its ObjectId.  
*/
router.get("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid product ID format" });
        }

        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error: error.message });
    }
});

/*  
  ✅ Update a product (PUT /products/:id) 
  - Allows updating existing product details.  
*/
router.put("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid product ID format" });
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product updated successfully!", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
});

/*  
  ✅ Delete a product (DELETE /products/:id)  
  - Removes a product by ID.  
*/
router.delete("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid product ID format" });
        }

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
});

export default router;
