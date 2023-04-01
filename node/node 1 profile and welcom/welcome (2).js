const http = require("http");

const prompt = require('prompt-sync')({sigint: true});

var user_name = prompt("Enter your name: ");

const server = http.createServer(function(request,response){

    response.writeHead(200, {"Context-Type":"text"});
	
    response.write("<h1> Welcome! </h1> <br>");
    
    response.write("<h3> Itz great to have you " + user_name + " !!! </h3>");

	response.end();
});

server.listen();

console.log("server listening and welcoming the user");