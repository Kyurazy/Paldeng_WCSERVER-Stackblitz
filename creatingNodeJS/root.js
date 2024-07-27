var http = require('http');
var server = http.createServer(function (req, res) {
  if (req.url == '/'){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><body><h1>Welcome to my Node.js Application</h1></body></html>');
  res.write("Welcome John Smith. This is an activity about the basics of Node.js");
  res.end();
  }
  else if (req.url == '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h2>This is the About page</h2></body></html>');
    res.write("Hello John Smith. This activity will teach you on how to deal with a simple server and local modules in Node.js");
    res.end();
  }
  else if (req.url == '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h3>This is the Contact page</h3></body></html>');
    res.write("John Smith, if you want additional details about this activity go to this site https://www.tutorialsteacher.com/nodejs/nodejs-tutorials");
    res.end();
  }

  else if (req.url == '/gallery'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>This is the Gallery Page</h1></body></html>'); 
    res.end();
  }
  
  else
    res.end('Invalid Request')
});

server.listen(6953);


/*
Author: Carl Lester P. Paldeng
Date: 2024-07-27
Section: WD-303
*/