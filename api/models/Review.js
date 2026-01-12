import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Review ||
  mongoose.model("Review", ReviewSchema);
