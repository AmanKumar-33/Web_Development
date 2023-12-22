// writing a code for the  server side of the application.
// using node.js

var http = require('http');
// creating an http server
var server = http.createServer();
    // handle for the request
function handle(req,res){
    res.writeHead(200,{'content-type' : 'text/plain'})
    res.write('hello,world')
    res.end()
    console.log('request was made: ' + req.url + ' ' + req.method);

        
}
// handle request with handler
server.on('request',handle);


// listen on port 1337
server.listen(1337)

