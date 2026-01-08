// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// // Review schema
// const reviewSchema = new mongoose.Schema({
//   name: String,
//   message: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Review = mongoose.model("Review", reviewSchema);

// // Save review
// app.post("/reviews", async (req, res) => {
//   try {
//     const review = new Review(req.body);
//     await review.save();
//     res.status(201).json({ success: true });
//   } catch (error) {
//     res.status(500).json({ success: false });
//   }
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import reviewRoutes from "./routes/reviewRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/reviews", reviewRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.get("/", (req, res) => {
    res.send("Backend is running");
});

// Get all reviews
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


