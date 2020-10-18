// Setup empty JS object to act as endpoint for all routes
projectData = {};

const express = require('express');
const request = require('request-promise');
const apiKey = require('./config');

const port = process.env.PORT || 3000;

// Start up an instance of app
const app = express();

/* Middleware*/
app.use(express.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

//endpoint for geeting weather using zip code or city name
app.get('/weather/:zipCity', async (req, res) => {
   const { zipCity } =  req.params; 
   const { current } = await request({
       uri: `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${zipCity}`,
       json: true, 
   });
   res.send({current});
});

// Setup Server
const server = app.listen(port, () => {
    console.log(`the server is up on port ${port}.`);
});