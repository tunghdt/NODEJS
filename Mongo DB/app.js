var express = require("express");
var app = express();
var server = require("http").createServer(app);

var MongoClient = require('mongodb').MongoClient;


// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server

app.get("/d/:id", function(req, res){
       var i = req.params.id;

    switch(i){
      case "add": 
  MongoClient.connect(url, function(err, db) {
  var collection = db.collection('documents');
  collection.insertMany([{a : 1}, {a : 2}, {a : 3}], function(err) {});
  collection.find({}).toArray
        (function (err, result) {
                    res.send(result);  
            });
  db.close();
   });

      break;
      case "del": 
  MongoClient.connect(url, function(err, db) {
  var collection = db.collection('documents');
  collection.deleteOne({ "a" : 3 }, function(err, result){}); 

    collection.find({}).toArray(function (err, result) {
                    res.send(result);  
            });
  db.close();
   });
      break;
      case "update": 
      MongoClient.connect(url, function(err, db) {
  var collection = db.collection('documents');
  collection.update({a: 1}, {$set: {a: 999}}, function (err, numUpdated) {});
    collection.find({}).toArray
        (function (err, result) {
                    res.send(result);  
            });
  db.close();
   });
      ;break;
      case "add1":
  MongoClient.connect(url, function(err, db) {
  var smartjob1 = {city: 'a', pop: 2, state: 'b', loc: [-4, -5]};
  var smartjob2 = {city: 'b', pop: 3, state: 'c', loc: [4, 5]};
  var collection = db.collection('documents');
    // Insert some users
    collection.insert([smartjob1, smartjob2], function (err, result) {
      if (err) {
        console.log(err);
      } 
    });
    collection.find({}).toArray
        (function (err, result) {
                    res.send(result);  
            });
  db.close();
   });
      ;break;
      case "clear": 
      MongoClient.connect(url, function(err, db) {
  var collection = db.collection('documents');
  collection.remove({}, function (err) {});
    collection.find({}).toArray
        (function (err, result) {
                    res.send(result);  
            });
  db.close();
   });
      ;break;
    }

});

/*
var mongodb= require('mongodb');

var Mongoclient = mongodb.Mongoclient;

var url = 'mongodb://localhost:27017/test'
Mongoclient.connect(url,function(err,db){
if(err){
	console.log(err);
}
else{
	console.log("connected");
	var collection =db.collection('student');
	collection.find({}).toArray(function(err,result){
		console.log(result);
	})
}

});


//console.log(kitty.name); // 'Silence'
*/

server.listen(3000);
console.log("server dang chay");

app.get("/", function(req, res){
	res.send("/index.html");
});
