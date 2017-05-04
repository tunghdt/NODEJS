var express = require('express');
var app = express();

app.use('/thumuc',express.static('public'));
//http://localhost:3000/thumuc/a.mp4
//http://localhost:3000/thumuc/b.txt

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})