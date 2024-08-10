var express = require('express');
var app = express();


app.get('/', function(req, res) {
    console.log("There is GET request for the homepage!");
    res.send('Here is the GET Method!');
})

app.post('/', function(req, res) {
    console.log("A POST request for the homepage is accessed.");
    res.send('Here is the POST Method');
})

app.get('/list_user', function(req, res) {
    console.log("Got a GET request for the /list_user");
    res.send('This is Page Listing');
})
app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for the /ab*cd");
    res.send('Pattern Match Page');
})

app.get('/carlpaldeng', function(req, res) {
    console.log("Got a GET request for the /carlpaldeng");
    res.send('Carl Lester P. Paldeng, WD-303');
})

var server = app.listen(4000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s%s", host, port)
})