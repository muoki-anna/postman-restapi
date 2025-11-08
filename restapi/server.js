// Load environment variables from .env file in root directory
require('dotenv').config();

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/userapi';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB successfully!'))
.catch(err => console.error('MongoDB connection error:', err));

// ... rest of your code remains the same