const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Fix MongoDB connection string and options
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/neuronerds', {
  useNewUrlParser: true, // Note: This is deprecated in newer MongoDB versions but included for compatibility
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Fix typo in res and simplify response
app.get('/', (req, res) => res.send('Robotic Social Platform API'));

// Start server
app.listen(5000, () => console.log('Server is running on port 5000'));