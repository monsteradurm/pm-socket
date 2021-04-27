const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", socket => {
    // ...
    socket.on('boarditem-update', (update) => {
        io.emit('boarditem-update', update);
    });

    socket.on('syncketch-update', (update) => {
        io.emit('syncsketch-update', update);
    });

    socket.on('disconnect', () => {});
  });
  
  server.listen(3000, () => {
    console.log('listening on *:3000');
  });