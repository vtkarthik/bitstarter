var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var out = fs.readFilSync(index.html);
  response.send(out));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
