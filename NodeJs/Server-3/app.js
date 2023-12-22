// server-3/app.js
// Demonstrates a chat server using socket.io

var fs  = required('fs');
var express = require('express');
var app = express();
var io = require('socket.io').listen(server);
var server = app.listen(1337);


// index.html
app.get('/',function(req, res){
    var stream = fs.createReadStream('./index');
    stream.on('error',function(err){
        res.json(400,{error:err.message});

    });
    stream.pipe(res);
});


// sockets
io.sockets.on('connection',function(client){
    // send a message to the client in every 5 sec
    setInterval(function(){
        client.emit('from_server',{message:'ping' + new Date()});
    },500);
}) 