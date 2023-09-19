const express = require('express');
const path = require('path');
const errorHandler = require('express-error-handler');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware for handling URL-encoded and JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Include your routes here (e.g., htmlRoutes)
require('./routes/htmlRoutes')(app);

// Error handling middleware
const errorHandlerOptions = {
  server: 'Express app',
};

app.use(errorHandler(errorHandlerOptions));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
