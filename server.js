const http = require("http");
const io = require("socket.io");
require("dotenv").config()

const apiServer = require("./api");

const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, {
    cors: {origin: "*"}
});

const sockets = require("./sockets");

httpServer.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}...`);

sockets.listen(socketServer);


