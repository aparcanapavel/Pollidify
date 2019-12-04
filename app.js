const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const polls = require("./routes/api/polls");
const users = require("./routes/api/users");
const choices = require("./routes/api/choices");
const votes = require("./routes/api/votes");
const passport = require('passport');
const bodyParser = require('body-parser');
require('./config/passport')(passport);

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use("/api/users", users);
app.use("/api/polls", polls);
app.use("/api/choices", choices);
app.use("/api/votes", votes);


app.listen(port, () => console.log(`Server is running on port ${port}`));