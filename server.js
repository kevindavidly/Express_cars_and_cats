// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// use app's get method and pass it the base route '/' and a callback
// app.get('/', function(request, response) {
//     // just for fun, take a look at the request and response objects
//    console.log("The request object", request);
//    console.log("The response object", response);
//    // use the response object's .send() method to respond with an h1
//    response.send("<h1>Hello Express</h1>");
// })
app.get('/index.html', function(request, response) {
    response.render('index');
})
app.get('/cats.html', function(request, response) {
    response.render('cats');
})
app.get('/cars.html', function(request, response) {
    response.render('cars');
})
app.get('/form.html', function(request, response) {
    response.render('form');
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
