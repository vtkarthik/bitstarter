var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');   
  buf = new Buffer(256);
var out = fs.readFileSync(this.dir + "/" + "index" +".html",buf);
// console.log(buf.toString());
response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
