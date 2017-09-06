// Include our packages in our main server file
const express = require('express');
app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const port = process.env.PORT;

// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Log requests to console
app.use(morgan('dev'));

// Home route. We'll end up changing this to our main front end index later.
app.get('/', function(req, res) {
  res.send('Thundercats WaterMap API Server');
});

// Connect to database
mongoose.connect(process.env.MONGODB_URI);

require('./app/routes')(app);

// Start the server
app.listen(port);
console.log('Server is running on port ' + port + '.');
