const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
const port = 2000; // Change the port number
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const wsServer = new webSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('establishing a new connection with client');
    var connection = request.accept(null, request.origin);
    setInterval(() => {
        connection.sendUTF(new Date().getTime())
    }, 100);
});