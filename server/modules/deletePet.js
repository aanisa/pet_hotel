var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  database: 'chi', // name of your database
  host: 'localhost', // where is your database?
  port: 5432, // port for the database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 // 30 seconds to try to connect
};

// adds outline --- NEED TO UPDATE!
//for delete ajax
router.delete('/delete/:bookId', function(req, res){
  // SELECT * FROM "books";
  // var bookId= req.params.bookId;
  // console.log(req.params.bookId);

  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.send(500);
    } else {
      // we want to delete the selected book by targeting with ID
      db.query('DELETE FROM books WHERE id =' + bookId, function(queryError, result){
        done();
        if(queryError) {
          console.log('Error making query.');
          res.sendStatus(500);
        } else {
          console.log(result); // Good for debugging
          res.sendStatus(201);
        }
      });
    }
  });
});
