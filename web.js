var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  buf = new Buffer(256);
  fs.readFilSync(this.dir + "/" + index +".html",buf);
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
