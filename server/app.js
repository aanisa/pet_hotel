var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var registerOwner = require('./modules/register_owner.js');

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', 5000);


// app.use('/registerOwner', registerOwner);



app.use(express.static('server/public'));

app.listen(app.get('port'), function() {
  console.log('live on port', app.get('port'));
});
