// import dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

// set up express server
const app = express();

// set up express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// serve up front end from server ONLY if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// turn on routes
app.use(routes);

// set up a wildcard route just in case all of the other routes fail
app.get("*", function(req,res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// turn on mongo connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/compubulit", {useNewUrlParser: true});
// Connect to the Mongo DB
// var MONGODB_URI = "mongodb://localhost/compubulit";

// mongoose.Promise = Promise; // Set mongoose to leverage Built in JavaScript ES6 Promises
// mongoose.connect(MONGODB_URI);

// let mongooseConnection = mongoose.connection;

// mongooseConnection.on('error', console.error.bind(console, 'connection error:'));
// mongooseConnection.once('open', function() {
//   console.log(`Sucessfully Connected to Mongo DB !`); // If Connection is successful, Console.log(Message)
// });

// turn on server
app.listen(PORT, () => console.log(`🗺️ ==> Server now on ${PORT}`))