const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Enable CORS for local development
app.use(cors());
app.use(bodyParser.json());

// Mock database (in-memory storage)
let registrations = [];

// Route to handle registration data submission
app.post("/register", (req, res) => {
  const { name, email, phone, college, message } = req.body;

  // Save the data (could be to a database like MongoDB or MySQL)
  registrations.push({ name, email, phone, college, message });

  console.log("New registration:", { name, email, phone, college, message });

  res.status(201).json({
    message: "Registration successful! We will send a confirmation email shortly.",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
