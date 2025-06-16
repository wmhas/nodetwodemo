// app.js

const express = require('express'); // Import the Express.js library
const app = express();              // Create an Express application instance
const port = 8080;                  // Define the port number for our server

// Define a route for the root URL ("/")
// This function will be executed when a GET request is made to "/"
app.get('/', (req, res) => {
  res.send('Hello from Express.js!'); // Send a simple text response
});

// Define another route for "/about"
app.get('/about', (req, res) => {
  res.send('This is a simple Express.js demo application.');
});

// Define a route with a URL parameter
// Access this by going to /greet/yourname (e.g., /greet/Alice)
app.get('/greet/:name', (req, res) => {
  const name = req.params.name; // Access the 'name' parameter from the URL
  res.send(`Hello, ${name}! Welcome to the Express app.`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});