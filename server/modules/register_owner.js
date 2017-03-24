var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
    database: 'chi',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeOutMillis: 3000
};

var pool = new pg.Pool(config);

router.post('/', function(req, res) {
    res.send("from router woot woot");
});

module.exports = router;
