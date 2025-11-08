REST API with Express.js and MongoDB
A simple RESTful API built with Node.js, Express.js, and MongoDB using Mongoose ODM. This API provides full CRUD (Create, Read, Update, Delete) operations for managing users.

Features
✅ Create new users

✅ Retrieve all users

✅ Update users by ID

✅ Delete users by ID

✅ MongoDB database integration

✅ Environment variables configuration

✅ Error handling and validation

✅ JSON responses with consistent structure

Technologies Used
Node.js - Runtime environment

Express.js - Web framework

MongoDB - Database

Mongoose - MongoDB object modeling

dotenv - Environment variables management

Project Structure
text
restapi/
├── .env                    # Environment variables
├── models/
│   └── User.js            # User model schema
├── server.js              # Main server file
└── package.json           # Project dependencies
Installation
Clone or download the project

bash
# If using git
git clone <repository-url>
cd restapi
Install dependencies

bash
npm install
Set up environment variables

Create a .env file in the root directory

Add the following variables:

env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/userapi
Start MongoDB

Make sure MongoDB is running locally on port 27017

Or update MONGODB_URI for MongoDB Atlas

Run the server

bash
node server.js
API Endpoints
1. GET /users
Retrieve all users from the database.

Response:

json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "64f1a2b3c5d6e7f8a9b0c1d2",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 28,
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
2. POST /users
Create a new user.

Request Body:

json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 28
}
Response:

json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "_id": "64f1a2b3c5d6e7f8a9b0c1d2",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 28,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
3. PUT /users/:id
Update a user by ID.

Request Body:

json
{
  "name": "John Smith",
  "age": 29
}
Response:

json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "_id": "64f1a2b3c5d6e7f8a9b0c1d2",
    "name": "John Smith",
    "email": "john@example.com",
    "age": 29,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
4. DELETE /users/:id
Delete a user by ID.

Response:

json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "_id": "64f1a2b3c5d6e7f8a9b0c1d2",
    "name": "John Smith",
    "email": "john@example.com",
    "age": 29,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
Testing with Postman
1. Setup
Install Postman from https://www.postman.com/downloads/

Start your server: node server.js

2. Test Endpoints
Create User (POST):

Method: POST

URL: http://localhost:5000/users

Headers: Content-Type: application/json

Body (raw JSON):

json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 28
}
Get All Users (GET):

Method: GET

URL: http://localhost:5000/users

Update User (PUT):

Method: PUT

URL: http://localhost:5000/users/USER_ID_HERE

Headers: Content-Type: application/json

Body (raw JSON):

json
{
  "name": "John Smith",
  "age": 29
}
Delete User (DELETE):

Method: DELETE

URL: http://localhost:5000/users/USER_ID_HERE

User Model Schema
javascript
{
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  age: { type: Number, min: 0 },
  createdAt: { type: Date, default: Date.now }
}
Error Handling
The API returns consistent error responses:

Validation Error (400):

json
{
  "success": false,
  "message": "Validation error",
  "error": "Error details..."
}
Not Found (404):

json
{
  "success": false,
  "message": "User not found"
}
Server Error (500):

json
{
  "success": false,
  "message": "Error message",
  "error": "Error details..."
}
Environment Variables
PORT - Server port (default: 5000)

MONGODB_URI - MongoDB connection string

Dependencies
express: ^4.18.0

mongoose: ^7.0.0

dotenv: ^16.0.0

Development
To run the server in development mode:

bash
node server.js
Server will start on: http://localhost:5000

License
This project is for educational purposes as part of a coding checkpoint.
