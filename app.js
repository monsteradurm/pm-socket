const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

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