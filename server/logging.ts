// import express = require("express");
// var app = express() 

// var counter = 0;
// app.use(function(request, response, next){
// 	response.writeHead(200);
// 	response.write("Request From " + request.url +"And The method used " +request.method);
// 	counter++;
// 	next();
// });

// app.use(function(request, response, next){
		
// 	if(counter % 2 === 0){
// 		next();
// 	}else{
		
// 		response.statusCode = 403;
// 		response.end("You are not authorized for the time being ");
// 	}
// });

// app.use(function(request, response){
// 	response.end("You are authorized now");
// })
// app.listen(3000);
// console.log("SERVER IS LISTENING...");