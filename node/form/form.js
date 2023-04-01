var http = require('http');
var fs = require('fs');
var formidable = require('formidable')

http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<form action = 'biodata' method = 'post' enctype = 'multipart/form-data ><br>")
        res.write("name:<input type = 'text' name = 'username' ><br>")
        res.write("email:<input type = 'email' name = 'gmail' placeholder = 'enter_your_gamil'><br>")
        res.write("<label for = DOB> data of birth </lable>")
        res.write("<input type = 'date' name = 'DOB'><br>")
        res.write("upload your resume <input type ='file' name = 'resume'><br>")
        res.write("submit<input type= 'submit'>")
        res.end()
    }
else if(res.url=='/biodata'){
    var form = formidable.IncomingForm()
    form.parse(req, function(err,fields,files){
        res.write("name of the person:"+ fields.name)
        res.write("email of the person:"+ fields.gmail)
        res.write("DOF of the person:"+ fields.DOB)
    var old = files.resume;
    var new_pth = "C:/Users/IRON MAN/Desktop/node/form"+old
    })
}
}).listen(8080)
console.log('running')