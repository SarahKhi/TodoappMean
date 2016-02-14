
///<reference path ="./typings/express/express.d.ts" />

import path1 = require("path");
import express = require("express");

var app = express();

var publicpath = path1.resolve(__dirname + "/public");
app.use("/server", express.static(publicpath));

app.use(function(request, response){
	response.writeHead(200);
	response.end("Looks Like you didnot find path");
});

app.listen(3000);