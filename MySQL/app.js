var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'test'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});


connection.query('INSERT INTO sinhvienk60 (ho, ten, diemthi) VALUES ("px1","tung", 10)', function(err, rows, fields) {
  if (!err)
    console.log('insert thanh cong');
  else
    console.log('Error while performing Query.');
});


connection.query('SELECT * from sinhvienk60', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

app.listen(3000);