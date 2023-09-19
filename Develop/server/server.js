const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware for handling URL-encoded and JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Include your routes here, assuming you have an 'htmlRoutes.js' file in a 'routes' directory
require('./routes/htmlRoutes')(app);

// Error handling middleware (custom or use a library like 'express-error-handler')

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
