const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const registrationRoutes = require("./routes/registration");
const connectDB = require("./config/db");

dotenv.config();

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());

// MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

connectDB();

// Routes
app.use("/api/registration", registrationRoutes);

// Listen on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
