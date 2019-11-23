// Import Mongoose
const mongoose = require('mongoose');

// Create a new Express server
const express = require("express");
const app = express();

// Import key
const db = require('./config/keys').mongoURI;

// Connect to MongoDB via Mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Basic route to render test info to page
app.get("/", (req, res) => res.send("Hello World"));

// Heroku requires our server to run on process.env.PORT, and will also run on localhost:5000
const port = process.env.PORT || 5000;

// Express starts a socket and listens for connections, and logs success message
app.listen(port, () => console.log(`Server is running on port ${port}`));