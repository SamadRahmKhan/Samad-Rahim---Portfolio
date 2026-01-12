import { connectDB } from "../api/db.js";
import mongoose from "mongoose";

// Define schema
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    subject: { type: String, default: "", trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// Model
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// API handler
export default async function handler(req, res) {
  // Allow CORS for localhost dev
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    await connectDB(); // connect to MongoDB
    const newMessage = await Contact.create(req.body); // save data
    res.status(201).json({ success: true, data: newMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
