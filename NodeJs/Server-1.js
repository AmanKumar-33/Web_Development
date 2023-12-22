// wriiting the same code as server js but more effeciently

var http = require('http');
// listen on port 1337

http.createServer(function(req, res){
    res.writeHead(200,{'content-type' : 'text/plain'});
    res.end('hello,World');
}).listen(1337);