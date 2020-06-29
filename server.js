var express = require("express");
var app = express();


//****************************************************** */
/*** Server Configuration */
/******************************************************* */

// render HTML from the endpoints
var ejs = require('ejs');
app.set('views', __dirname + "/public");
app.engine("html", ejs.renderFile);
app.set("vie engine",ejs);

// server static file (js, css, img, pdf)
app.use(express.static(__dirname + '/public'));

// configure body-parser to read req payload
var bParser = require('body-parser');
app.use(bParser.json());

// wwwroot or public
/******************************************************* */
/*** Server HTML */
/******************************************************* */


app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/admin', function(req, res){
    res.render('admin.html');
});


app.get('/about', function(req, res){
    res.send("<H1>'about.html'</H1>");// the HTML file
});

app.get('/contact', function(req, res){
    res.send('<h1 style="color:blue">Email: jonathanraydowney@gmail.com</h1>');
});

/******************************************************* */
/*** API endpoints */
/******************************************************* */
var list = [];

app.post("/API/items", function(req, res){
    var item = req.body;
    
    list.push(item);

    res.json(item);
});

app.get("/API/items", function(req, res){
    res.json(list);
});

// start the project
app.listen(8080, function(){
    console.log("Server running at localhost:8080");
});


// start with: node server.js
// ctrl + c to kill the  server

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
//  https://www.restapitutorial.com/httpstatuscodes.html

// API -> Application Programming Interface