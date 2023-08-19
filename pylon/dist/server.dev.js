"use strict";

var webSocketServer = require('websocket').server;

var http = require('http');

var server = http.createServer();
var port = 2000; // Change the port number

server.listen(port, function () {
  console.log("Server is listening on port ".concat(port));
});
var wsServer = new webSocketServer({
  httpServer: server
});
wsServer.on('request', function (request) {
  console.log('establishing a new connection with client');
  var connection = request.accept(null, request.origin);
  setInterval(function () {
    connection.sendUTF(new Date().getTime());
  }, 100);
});