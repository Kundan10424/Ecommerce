import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", // Changed from ref: Product to ref: "Product"
                required: true,
            },
            title: String,
            image: String,
            price: Number,
            quantity: {
                type: Number,
                required: true,
                default: 1,
                max: 100,
            },
        },
    ],
}, { timestamps: true }); // ✅ Auto-adds createdAt and updatedAt fields

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
