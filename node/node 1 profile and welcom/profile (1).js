const http = require("http");

const prompt = require('prompt-sync')({sigint: true});

var stu_name = prompt("Enter your name: ");
var stu_rollno = prompt("Enter your rollno: ");
var stu_clg = prompt("Enter your college name: ");
var stu_dept = prompt("Enter your department name: ");
var stu_year = prompt("Enter your year of studying: ");
var stu_age = prompt("Enter your age: ");
var stu_total_cgpa = prompt("Enter your total cgpa: ");

const server = http.createServer(function(request,response){

    response.writeHead(200, {"Context-Type":"text"});
    response.write("<h1> Student Details! </h1> <br>");
    response.write("<table> <tbody>");
	response.write("<tr> <td> Student Name:</td> <td>" + stu_name + "</td> </tr>");
	response.write("<tr> <td> Student RollNo:</td> <td>" + stu_rollno + "</td> </tr>");
	response.write("<tr> <td> Student College:</td> <td>" + stu_clg + "</td> </tr>");
	response.write("<tr> <td> Student Department:</td> <td>" + stu_dept + "</td> </tr>");
	response.write("<tr> <td> Student Year:</td> <td>" + stu_year + "</td> </tr>");
	response.write("<tr> <td> Student Age:</td> <td>" + stu_age + "</td> </tr>");
	response.write("<tr> <td> Student Total CGPA:</td> <td>" + stu_total_cgpa + "</td> </tr>");
	response.write("</tbody> </table>");
	response.end();
});

server.listen(80);

console.log("server listening and displaying student details");