var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', 3000);
app.use('/', express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  if (process.env.DYNO) {
    console.log('Running on Heroku...');
    fs.openSync('/tmp/app-initialized', 'w');
  }
  console.log('Node app is running on port:', app.get('port'));
});
