//Création d'un serveur






var http = require ('http');

if (!http ){throw {msg : "Module not loaded "}}




//Requete

var serverRequest = function(request, response)

{console.log(request.headers);

response.setHeader('Content-Type', 'application/json');

response.write("introduction")

response.end();

}




var port =8000;

var server = http.createServer(serverRequest);

server.listen(port);

console.log("Server started on port " + port);