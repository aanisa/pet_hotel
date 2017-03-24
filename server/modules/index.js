var express = require('express'); // import express
var router = express.Router(); // unpack (?) router functionality from express
var path = require('path'); // import path functionality

// base URL 'GET' request
router.get('/', function(req, res) {
  console.log('base URL hit in index.js router'); // server console
  res.sendFile(path.resolve('server/public/views/index.html')); // serve up index.html
}); // end base URL 'GET' request

module.exports = router; // export the router functionality
