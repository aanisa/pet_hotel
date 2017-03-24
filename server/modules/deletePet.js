var express = require('express');
var router = express.Router();
var pg = require('pg');

//configures database connection
var config = {
  database: 'chi', // name of your database
  host: 'localhost', // where is your database?
  port: 5432, // port for the database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 // 30 seconds to try to connect
};

var pool = new pg.Pool(config);

//for delete ajax
router.delete('/delete/:petId', function(req, res){

  var petId= req.params.petId;
  console.log(req.params.petId);


  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.send(500);
    } else {
      // we want to delete the pet by targeting with petId
      db.query('DELETE FROM pets WHERE id =' + petId, function(queryError, result){
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

module.exports = router;
