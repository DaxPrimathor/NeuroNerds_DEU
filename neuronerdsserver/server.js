const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');

const postRoutes = require('./routes/posts');


require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => res.send('Robotic Social Platform API'));


// Fix MongoDB connection string and options
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/neuronerds', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Fix typo in res and simplify response
app.get('/', (req, res) => res.send('Robotic Social Platform API'));

// Start server
app.listen(5000, () => console.log('Server is running on port 5000'));
