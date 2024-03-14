const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./db');
const cors = require('cors');
const noticesController = require('./db/notices');
const adminRoutes = require('./routes/adminRoutes');
const leclinks = require('./db/fetchlecdetails');

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for cross-origin requests

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');

    // Routes
    app.post('/api/notices', noticesController.createNotice);
    app.get('/api/notices/y2s1', noticesController.getAllNotices);
    app.put('/api/notices/:id', noticesController.updateNotice);
    app.use('/api/admin', adminRoutes);

    app.get('/api/lecture-details', leclinks.fetchLecDetails);
    app.post('/api/lecture-details/create', leclinks.createLecDetails);

    // Serve static files from the Vue.js build directory
    app.use(express.static(path.join(__dirname, '../dist')));

    // Handle all other routes with the Vue.js app
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });