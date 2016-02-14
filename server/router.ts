import express = require("express");
import path = require("path");
var server = express();
import http = require("http");

var pathname = path.resolve(__dirname, "./../client");
server.use(express.static(pathname));



// server.get("/hello/:who", function(req, res){
// 	res.end(req.params.who );
// });
// server.get("/getData", function(req, res){
	
//     var arr = [1,2,3,4,55,6,7]
//     res.send(arr);
    
// });

server.get('/deletedata', function(req, res){
    console.log('delete from server')
})
// server.get("/Information", function(req, res){
// 	res.end("Information page");
// });
http.createServer(server).listen(3000)
console.log('server is listening');