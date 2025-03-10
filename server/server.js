const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware for JSON parsing
app.use(express.json());
app.use(cookieParser());

//Define cors
const cors = require('cors');
app.use(cors({
  // origin: 'http://localhost:5173',
  origin: 'https://news-pulse-ui.vercel.app',  // Replace with your Vercel frontend URL
  credentials: true,  // Allow cookies if needed
}));

// Database connection
const connectDB = require('./config/db');
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/news', require('./routes/news'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res)=>{
  res.send("Server is running !!");
})
