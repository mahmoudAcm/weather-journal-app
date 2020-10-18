// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

const port = process.env.PORT || 3000;

// Start up an instance of app
const app = express();

/* Middleware*/
app.use(express.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const server = app.listen(port, () => {
    console.log(`the server is up on port ${port}.`);
});