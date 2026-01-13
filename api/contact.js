import { connectDB } from "./db.js";
import Contact from "./models/Contact.js";

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing fields" });
    }

    await Contact.create({ name, email, subject, message });

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return res.status(500).json({ success: false });
  }
}
