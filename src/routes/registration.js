const express = require("express");
const router = express.Router();
const Registration = require("../models/registration");

// POST: Register a new user
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if the email already exists
    const existingRegistration = await Registration.findOne({ email });
    if (existingRegistration) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Create a new registration
    const newRegistration = new Registration({ name, email });
    const savedRegistration = await newRegistration.save();
    res.status(201).json(savedRegistration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Fetch all registrations
router.get("/", async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
