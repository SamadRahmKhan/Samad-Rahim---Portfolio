import express from "express";
import { Review } from "../models/Review.js";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review submitted!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
