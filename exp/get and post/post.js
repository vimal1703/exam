var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var urlencoderparser = bodyparser.urlencoded({extended: false})
app.get('/', function(req,res){
    res.sendFile(__dirname+"/"+"index_post.html");
});
app.post('/second_page' ,urlencoderparser, function(req, res){
    res.send("<h1>NAME OF THE PERSON" + req.body.name111+"</h1>")
})
app.listen(8080)
console.log('server is runing')