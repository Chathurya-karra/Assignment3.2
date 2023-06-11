const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const playerRoutes = require('./routes/playerRoutes');

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Define API routes
app.use('/', playerRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
