// writing an  Http server using Express.js
var express = required('express');
var app = express();

app.listen(1337);
app.get('/*',function(req,res){
    res.send(200,'Hello,world!');
});