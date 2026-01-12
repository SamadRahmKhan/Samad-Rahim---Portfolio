import { connectDB } from "./db.js";
import Review from "./models/Review.js";

export default async function handler(req, res) {
  await connectDB();

  // GET → fetch all reviews
  if (req.method === "GET") {
    try {
      const reviews = await Review.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        data: reviews,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch reviews",
      });
    }
  }

  // POST → create new review
  if (req.method === "POST") {
    try {
      const { name, email, message, rating } = req.body;

      if (!name || !email || !message || !rating) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      const newReview = await Review.create({
        name,
        email,
        message,
        rating,
      });

      return res.status(201).json({
        success: true,
        data: newReview,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to submit review",
      });
    }
  }

  // Method not allowed
  return res.status(405).json({
    success: false,
    message: "Method not allowed",
  });
}
