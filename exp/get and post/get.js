var express = require('express')
var app = express()

app.get('/', function(req,res){
    res.sendFile(__dirname+"/"+"index_get.html");
});
app.get('/second_page' , function(req, res){
    res.send("<h1>NAME OF THE PERSON" + req.query['name111']+"</h1>")
})
app.listen(8080)
console.log('server is runing')