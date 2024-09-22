//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const petRoutes = require('./api/pets.router.js');
const connectDB = require("./database.js");
const notFoundHandler = require('./middleware/notFoundHandler.js');
const errorHandler = require('./middleware/errorHandler.js');
const path = require("path")
//init
const PORT = process.env.PORT || 8000;
dotenv.config();
const app = express();
connectDB();
// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use("/media",express.static(path.join(__dirname,"media")));
// MongoDB connection


// Routes
app.use("/api/pets/",petRoutes);
// Not Found Handling middleware
app.use(notFoundHandler);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
