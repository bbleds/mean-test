//Simple server setup

//require http
var http = require('http');

//file system module --> lets us work with files on device
var fs = require("fs");

//404 response
function send404Response(response){
	response.writeHead(404, {"Content-Type" : "text/plain"});
	response.write("Error 404: PAGE IS NOT FOUND BRUH");
	response.end();
}

//handle user requests
function onRequest(request, response){
	//request is what user wants
	//response is what we send back
			console.log(request.method);
		  console.log("A user made a request "+ request.url);
		  // response.writeHead(200, {"Context-Type": "text/plain"});
		  // response.write("Here is the response and some sweeeeeet data");
		  // response.end();
		  // response.writeHead(200, {"Content-Type" : "text/html"});
		  // fs.createReadStream("./index.html").pipe(response);



		  //forward slash means send index file
		  if(request.method === "GET" && request.url === "/"){
		  		response.writeHead(200, {"Content-Type" : "text/html"});
		  			//send readible stream for performance
		  				//send file to response
		  			fs.createReadStream("./public/views/index.html").pipe(response);
		  } else {
		  		send404Response(response);

		  }

}


//create server
http.createServer(onRequest).listen(8888);
console.log("server is now runnning............");

