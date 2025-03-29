import jwt from "jsonwebtoken";
import process from "process";

const verifyToken = (req, res, next) => {
    const token = req.cookies?.token; // Extract token from cookies

    if (!token) {
        return res.status(401).json({ msg: "Access Denied! No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = decoded; // Store user details (contains userId)

        next();
    } catch (err) {
        console.error("❌ Token Verification Error:", err);
        return res.status(403).json({ msg: "Invalid or expired token!" });
    }
};

export default verifyToken;

