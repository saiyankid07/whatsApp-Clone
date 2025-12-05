const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose"); // Import Mongoose

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection successful")) // Success message
  .catch((err) => console.error("MongoDB connection error:", err)); // Error message

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend server is running!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
