// Import mongoose
const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is required
        trim: true // Remove whitespace from both ends
    },
    email: {
        type: String,
        required: true, // Email is required
        unique: true, // Email must be unique
        trim: true,
        lowercase: true // Convert email to lowercase
    },
    age: {
        type: Number,
        min: 0 // Age cannot be negative
    },
    createdAt: {
        type: Date,
        default: Date.now // Set default to current date
    }
});

// Export User model
module.exports = mongoose.model('User', userSchema);