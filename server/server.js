var app = require('./route');
var mongoose = require('mongoose');

var port = 3000;

app.listen(port, function() {
  console.log('Listening on port', port);
});

mongoose.connect('ds145039.mlab.com:45039/heroku_tm1zwt24');