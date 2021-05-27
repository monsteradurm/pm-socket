const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", socket => {

  socket.on('test-message', (update) => {
    io.emit("test-message", update);
  });

  socket.on('send-issue-update', (update) => {
    io.emit('issue-update', update);
  })
  socket.on('send-boarditem-update', (update) => {

    io.emit('boarditem-update', update);
  });

  socket.on('send-board-update', (update) => {
    io.emit('board-update', update);
  });

  socket.on('send-syncketch-update', (update) => {
    io.emit('syncsketch-update', update);
  });

  socket.on('disconnect', () => { });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});