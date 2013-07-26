var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');   
  buf = new Buffer(256);
//var out = 
//console.log
response.send(fs.readFileSync('./index.html').toString());
//buf.write(fs.readFileSync('./index.html'),"utf-8");
// buf.toString('utf-8')
//console.log(out.toString());
//response.send(out.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
