import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  rating: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Review ||
  mongoose.model("Review", ReviewSchema);
